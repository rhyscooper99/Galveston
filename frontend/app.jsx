const { useState, useEffect } = React;

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const resp = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!resp.ok) throw new Error('Login failed');
      const data = await resp.json();
      onLogin(data.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl mb-4 text-center">Galveston Group</h1>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input className="border p-2 w-full mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className="border p-2 w-full mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white w-full py-2">Login</button>
      </form>
    </div>
  );
}

function PacDashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/pac/dashboard').then(r => r.json()).then(setData);
  }, []);
  useEffect(() => {
    if (data) {
      const ctx = document.getElementById('pacChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.transactions.map(t => t.type),
          datasets: [{ label: 'Amount', data: data.transactions.map(t => t.amount), backgroundColor: 'rgba(59,130,246,0.5)' }]
        }
      });
    }
  }, [data]);
  if (!data) return <div className="p-4">Loading...</div>;
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Funds: ${'{'}data.funds{'}'}</h2>
      <canvas id="pacChart" height="100"></canvas>
    </div>
  );
}

function DonorDashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/donor/dashboard').then(r => r.json()).then(setData);
  }, []);
  if (!data) return <div className="p-4">Loading...</div>;
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Top PACs</h2>
      <ul className="list-disc pl-5">
        {data.top_pacs.map(p => <li key={p.name}>{p.name} - {p.policy_tags.join(', ')}</li>)}
      </ul>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  if (!user) return <Login onLogin={setUser} />;
  return user.role === 'pac' ? <PacDashboard /> : <DonorDashboard />;
}

ReactDOM.render(<App />, document.getElementById('root'));
