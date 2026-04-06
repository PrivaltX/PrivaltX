import React, { useState } from 'react';

const LISTINGS = [
  {
    id: 1,
    fundName: 'Blackstone Capital Partners VIII',
    strategy: 'Buyout',
    geography: 'North America',
    vintageYear: 2019,
    nav: 8000000,
    positionSize: 3000000,
    unfundedCommitment: 500000,
    remainingLife: 3,
    askPrice: 2730000,
    discountToNav: 91,
    jCurve: 'Mid Stage — Recovery Phase',
    jCurveColor: 'text-yellow-400',
  },
  {
    id: 2,
    fundName: 'KKR European Fund V',
    strategy: 'Buyout',
    geography: 'Europe',
    vintageYear: 2018,
    nav: 12000000,
    positionSize: 5000000,
    unfundedCommitment: 800000,
    remainingLife: 2,
    askPrice: 4600000,
    discountToNav: 92,
    jCurve: 'Late Stage — Harvest Period',
    jCurveColor: 'text-green-400',
  },
  {
    id: 3,
    fundName: 'Sequoia Capital Global Growth III',
    strategy: 'Venture Capital',
    geography: 'Global',
    vintageYear: 2021,
    nav: 6000000,
    positionSize: 2000000,
    unfundedCommitment: 1200000,
    remainingLife: 5,
    askPrice: 1700000,
    discountToNav: 85,
    jCurve: 'Early Stage — J-Curve Dip',
    jCurveColor: 'text-red-400',
  },
  {
    id: 4,
    fundName: 'Apollo Infrastructure Partners II',
    strategy: 'Infrastructure',
    geography: 'North America',
    vintageYear: 2020,
    nav: 15000000,
    positionSize: 4000000,
    unfundedCommitment: 600000,
    remainingLife: 4,
    askPrice: 3720000,
    discountToNav: 93,
    jCurve: 'Mid Stage — Recovery Phase',
    jCurveColor: 'text-yellow-400',
  },
  {
    id: 5,
    fundName: 'Carlyle Asia Growth Partners IV',
    strategy: 'Growth Equity',
    geography: 'Asia Pacific',
    vintageYear: 2019,
    nav: 9000000,
    positionSize: 3500000,
    unfundedCommitment: 400000,
    remainingLife: 3,
    askPrice: 3150000,
    discountToNav: 90,
    jCurve: 'Mid Stage — Recovery Phase',
    jCurveColor: 'text-yellow-400',
  },
  {
    id: 6,
    fundName: 'Warburg Pincus Private Equity XIV',
    strategy: 'Growth Equity',
    geography: 'Global',
    vintageYear: 2018,
    nav: 20000000,
    positionSize: 6000000,
    unfundedCommitment: 0,
    remainingLife: 2,
    askPrice: 5640000,
    discountToNav: 94,
    jCurve: 'Late Stage — Harvest Period',
    jCurveColor: 'text-green-400',
  },
];

function formatUSD(amount) {
  if (amount >= 1000000) {
    return '$' + (amount / 1000000).toFixed(2) + 'M';
  }
  return '$' + amount.toLocaleString();
}

function NavBar({ right }) {
  return (
    <div className="border-b border-gray-800 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <span className="text-white">Priv</span>
        <span className="text-blue-400">Alt</span>
        <span className="text-white">X</span>
      </h1>
      <span className="text-gray-400 text-sm">{right}</span>
    </div>
  );
}

function RoleSelection({ onSelectRole }) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-white">Priv</span>
          <span className="text-blue-400">Alt</span>
          <span className="text-white">X</span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg">The Private Alternatives Exchange</p>
      </div>
      <div className="text-center mb-10">
        <h2 className="text-white text-2xl font-semibold mb-2">
          Welcome. How are you accessing PrivAltX today?
        </h2>
        <p className="text-gray-500 text-sm">Select your role to continue</p>
      </div>
      <div className="flex gap-6">
        <div
          onClick={() => onSelectRole('seller')}
          className="cursor-pointer bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-8 w-72 transition-all duration-200"
        >
          <div className="text-4xl mb-4">🏦</div>
          <h3 className="text-white text-xl font-semibold mb-2">LP Seller</h3>
          <p className="text-gray-400 text-sm">
            I hold a private equity fund position and want to list it for sale on the secondary market.
          </p>
          <div className="mt-6 text-blue-400 text-sm font-medium">List my position →</div>
        </div>
        <div
          onClick={() => onSelectRole('buyer')}
          className="cursor-pointer bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-8 w-72 transition-all duration-200"
        >
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-white text-xl font-semibold mb-2">Institutional Buyer</h3>
          <p className="text-gray-400 text-sm">
            I am looking to acquire secondary PE fund positions at competitive pricing.
          </p>
          <div className="mt-6 text-blue-400 text-sm font-medium">Browse marketplace →</div>
        </div>
      </div>
      <div className="mt-16 text-gray-600 text-xs">
        PrivAltX © 2026 · Private Alternatives Exchange · Confidential
      </div>
    </div>
  );
}

function SellerDashboard({ onSubmit }) {
  const [form, setForm] = useState({
    fundName: '',
    vintageYear: '',
    strategy: '',
    geography: '',
    nav: '',
    positionSize: '',
    unfundedCommitment: '',
    remainingLife: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fundName || !form.nav || !form.positionSize) {
      alert('Please fill in at least Fund Name, NAV, and Position Size.');
      return;
    }
    onSubmit(form);
  };

  const years = [1, 2, 3, 4, 5, 6, 7, 8];
  const vintageYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar right="LP Seller Portal" />
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">List Your Position</h2>
          <p className="text-gray-400">
            Enter your fund position details below. Our AI engine will analyse your position and suggest a fair market price range.
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Fund Name <span className="text-red-400">*</span></label>
            <input
              type="text" name="fundName" value={form.fundName} onChange={handleChange}
              placeholder="e.g. Blackstone Capital Partners VIII"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vintage Year <span className="text-red-400">*</span></label>
              <select name="vintageYear" value={form.vintageYear} onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Select year</option>
                {vintageYears.map(function(y) { return <option key={y} value={y}>{y}</option>; })}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Strategy <span className="text-red-400">*</span></label>
              <select name="strategy" value={form.strategy} onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Select strategy</option>
                <option value="Buyout">Buyout</option>
                <option value="Venture Capital">Venture Capital</option>
                <option value="Growth Equity">Growth Equity</option>
                <option value="Distressed">Distressed</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Private Credit">Private Credit</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Geography</label>
            <select name="geography" value={form.geography} onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
              <option value="">Select geography</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Global">Global</option>
              <option value="Emerging Markets">Emerging Markets</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current NAV (USD) <span className="text-red-400">*</span></label>
              <input type="number" name="nav" value={form.nav} onChange={handleChange}
                placeholder="e.g. 5000000"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <p className="text-gray-600 text-xs mt-1">Enter full amount in USD</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Position Size (USD) <span className="text-red-400">*</span></label>
              <input type="number" name="positionSize" value={form.positionSize} onChange={handleChange}
                placeholder="e.g. 2000000"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <p className="text-gray-600 text-xs mt-1">Amount you want to sell</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Unfunded Commitment (USD)</label>
              <input type="number" name="unfundedCommitment" value={form.unfundedCommitment} onChange={handleChange}
                placeholder="e.g. 1000000"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <p className="text-gray-600 text-xs mt-1">Remaining capital to be called</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Remaining Fund Life (years)</label>
              <select name="remainingLife" value={form.remainingLife} onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Select</option>
                {years.map(function(y) { return <option key={y} value={y}>{y} {y > 1 ? 'years' : 'year'}</option>; })}
              </select>
            </div>
          </div>
          <div className="bg-blue-950 border border-blue-800 rounded-lg p-4">
            <p className="text-blue-300 text-sm">
              <span className="font-semibold">Note:</span> Buyer inherits all unfunded commitment obligations upon transfer. Ensure the amount entered is accurate.
            </p>
          </div>
          <button onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-colors text-lg">
            Get AI Price Suggestion →
          </button>
        </div>
      </div>
    </div>
  );
}

function PricingEngine({ data, onConfirm }) {
  const positionSize = parseFloat(data.positionSize);
  const unfunded = parseFloat(data.unfundedCommitment) || 0;
  const currentYear = 2026;
  const vintage = parseInt(data.vintageYear) || 2020;
  const age = currentYear - vintage;

  let jCurveStage = '';
  let jCurveColor = '';
  if (age <= 3) { jCurveStage = 'Early Stage — J-Curve Dip'; jCurveColor = 'text-red-400'; }
  else if (age <= 6) { jCurveStage = 'Mid Stage — Recovery Phase'; jCurveColor = 'text-yellow-400'; }
  else { jCurveStage = 'Late Stage — Harvest Period'; jCurveColor = 'text-green-400'; }

  let baseDiscount = 0.88;
  if (age <= 3) baseDiscount = 0.72;
  else if (age <= 6) baseDiscount = 0.85;
  else baseDiscount = 0.91;
  if (data.strategy === 'Venture Capital') baseDiscount -= 0.05;
  if (data.strategy === 'Distressed') baseDiscount -= 0.08;
  if (data.geography === 'Emerging Markets') baseDiscount -= 0.03;
  if (unfunded > positionSize * 0.5) baseDiscount -= 0.04;

  const lowDiscount = Math.max(baseDiscount - 0.05, 0.60);
  const highDiscount = Math.min(baseDiscount + 0.03, 0.98);
  const bidPrice = positionSize * lowDiscount;
  const askPrice = positionSize * highDiscount;
  const midPrice = (bidPrice + askPrice) / 2;
  const totalBuyerExposure = positionSize + unfunded;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar right="AI Pricing Engine" />
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">AI Price Analysis</h2>
          <p className="text-gray-400">{data.fundName} · {data.strategy} · {data.vintageYear} Vintage · {data.geography}</p>
        </div>
        <div className="bg-gray-900 border border-blue-800 rounded-2xl p-8 mb-6">
          <p className="text-blue-400 text-sm font-medium mb-4 uppercase tracking-wider">Suggested Price Range</p>
          <div className="flex items-end gap-6 mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Bid (Low)</p>
              <p className="text-3xl font-bold text-white">{formatUSD(bidPrice)}</p>
              <p className="text-gray-500 text-sm">{(lowDiscount * 100).toFixed(1)}% of NAV</p>
            </div>
            <div className="text-gray-600 text-2xl mb-3">—</div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Ask (High)</p>
              <p className="text-3xl font-bold text-blue-400">{formatUSD(askPrice)}</p>
              <p className="text-gray-500 text-sm">{(highDiscount * 100).toFixed(1)}% of NAV</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-gray-500 text-sm mb-1">Midpoint</p>
              <p className="text-2xl font-bold text-green-400">{formatUSD(midPrice)}</p>
              <p className="text-gray-500 text-sm">Recommended listing price</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: (highDiscount * 100) + '%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>0%</span><span>50%</span><span>100% of NAV</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">J-Curve Position</p>
            <p className={'text-sm font-semibold ' + jCurveColor}>{jCurveStage}</p>
            <p className="text-gray-600 text-xs mt-1">Fund age: {age} years</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">NAV Discount Range</p>
            <p className="text-white text-sm font-semibold">{((1 - highDiscount) * 100).toFixed(1)}% — {((1 - lowDiscount) * 100).toFixed(1)}% discount</p>
            <p className="text-gray-600 text-xs mt-1">vs. reported NAV</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Total Buyer Exposure</p>
            <p className="text-yellow-400 text-sm font-semibold">{formatUSD(totalBuyerExposure)}</p>
            <p className="text-gray-600 text-xs mt-1">Position + unfunded commitment</p>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
          <p className="text-white font-semibold mb-4">Key Pricing Factors</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Fund vintage ({data.vintageYear})</span>
              <span className={'text-sm font-medium ' + jCurveColor}>{jCurveStage}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Strategy ({data.strategy})</span>
              <span className="text-sm font-medium text-white">
                {data.strategy === 'Buyout' ? 'Premium pricing' : data.strategy === 'Distressed' ? 'Higher discount applied' : data.strategy === 'Venture Capital' ? 'Discount applied' : 'Standard pricing'}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Geography ({data.geography})</span>
              <span className="text-sm font-medium text-white">{data.geography === 'Emerging Markets' ? 'Discount applied' : 'Standard pricing'}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Unfunded commitment burden</span>
              <span className="text-sm font-medium text-white">{unfunded > positionSize * 0.5 ? 'High — discount applied' : 'Manageable'}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-400 text-sm">Secondary market conditions (2026)</span>
              <span className="text-sm font-medium text-green-400">Active — $210B+ annual volume</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
          <p className="text-white font-semibold mb-4">Why PrivAltX vs Traditional Broker</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-red-400 text-sm font-medium mb-3">Traditional Broker</p>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">⏱ Settlement: 2—6 months</p>
                <p className="text-gray-400 text-sm">💸 Fees: 2—5% of deal value</p>
                <p className="text-gray-400 text-sm">📞 Process: Phone calls, manual paperwork</p>
                <p className="text-gray-400 text-sm">🔒 Minimum: $1M—$5M</p>
              </div>
            </div>
            <div>
              <p className="text-green-400 text-sm font-medium mb-3">PrivAltX Platform</p>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">⚡ Settlement: 7—14 days</p>
                <p className="text-gray-300 text-sm">💰 Fees: Under 1% of deal value</p>
                <p className="text-gray-300 text-sm">🤖 Process: AI-powered, automated</p>
                <p className="text-gray-300 text-sm">🔓 Minimum: From $100K</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={onConfirm}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-colors text-lg">
          Confirm Listing at {formatUSD(midPrice)} →
        </button>
        <p className="text-gray-600 text-xs text-center mt-4">
          Price suggestions are indicative only. Final price determined by buyer-seller negotiation on platform.
        </p>
      </div>
    </div>
  );
}

function Marketplace({ onSelectListing }) {
  const [filterStrategy, setFilterStrategy] = useState('All');
  const [filterGeo, setFilterGeo] = useState('All');
  const strategies = ['All', 'Buyout', 'Venture Capital', 'Growth Equity', 'Infrastructure', 'Distressed'];
  const geographies = ['All', 'North America', 'Europe', 'Asia Pacific', 'Global'];
  const filtered = LISTINGS.filter(function(l) {
    return (filterStrategy === 'All' || l.strategy === filterStrategy) &&
           (filterGeo === 'All' || l.geography === filterGeo);
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar right="Institutional Buyer Portal" />
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Secondary Marketplace</h2>
          <p className="text-gray-400">Browse verified LP positions available for immediate acquisition. All positions are KYC-cleared and GP consent pre-approved.</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Live Listings</p>
            <p className="text-white text-2xl font-bold">{LISTINGS.length}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Value</p>
            <p className="text-blue-400 text-2xl font-bold">$23.5M</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Avg. Discount to NAV</p>
            <p className="text-green-400 text-2xl font-bold">9.2%</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Avg. Settlement</p>
            <p className="text-yellow-400 text-2xl font-bold">7 days</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Strategy</label>
            <select value={filterStrategy} onChange={function(e) { setFilterStrategy(e.target.value); }}
              className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500">
              {strategies.map(function(s) { return <option key={s} value={s}>{s}</option>; })}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Geography</label>
            <select value={filterGeo} onChange={function(e) { setFilterGeo(e.target.value); }}
              className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500">
              {geographies.map(function(g) { return <option key={g} value={g}>{g}</option>; })}
            </select>
          </div>
          <div className="ml-auto flex items-end">
            <p className="text-gray-500 text-sm">{filtered.length} listings found</p>
          </div>
        </div>
        <div className="space-y-4">
          {filtered.map(function(listing) {
            return (
              <div key={listing.id} className="bg-gray-900 border border-gray-800 hover:border-blue-700 rounded-2xl p-6 transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold text-lg">{listing.fundName}</h3>
                      <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">{listing.strategy}</span>
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">{listing.geography}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gray-400">Vintage: <span className="text-white">{listing.vintageYear}</span></span>
                      <span className="text-gray-400">NAV: <span className="text-white">{formatUSD(listing.nav)}</span></span>
                      <span className="text-gray-400">Unfunded: <span className="text-yellow-400">{listing.unfundedCommitment > 0 ? formatUSD(listing.unfundedCommitment) : 'None'}</span></span>
                      <span className="text-gray-400">Life remaining: <span className="text-white">{listing.remainingLife}yr</span></span>
                    </div>
                    <div className="mt-2">
                      <span className={'text-xs font-medium ' + listing.jCurveColor}>{listing.jCurve}</span>
                    </div>
                  </div>
                  <div className="text-right ml-8">
                    <p className="text-gray-500 text-xs mb-1">Asking Price</p>
                    <p className="text-white text-2xl font-bold">{formatUSD(listing.askPrice)}</p>
                    <p className="text-green-400 text-sm">{listing.discountToNav}% of NAV</p>
                    <button
                      onClick={function() { onSelectListing(listing); }}
                      className="mt-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
                      Express Interest →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SettlementFlow({ listing, onComplete }) {
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  const steps = [
    {
      day: 'Day 1',
      title: 'Interest Expressed',
      description: 'Your expression of interest has been submitted. PrivAltX notifies the seller and initiates the matching process.',
      status: 'complete',
      detail: 'Buyer identity pre-verified via PrivAltX KYC stack. Seller notified instantly.',
    },
    {
      day: 'Day 2',
      title: 'KYC & Accreditation Verified',
      description: 'Automated KYC/AML checks completed. Buyer confirmed as Qualified Purchaser.',
      status: 'complete',
      detail: 'Identity verified · Sanctions cleared · Accreditation confirmed · Source of funds approved',
    },
    {
      day: 'Day 3',
      title: 'GP Consent Requested',
      description: 'Digital consent request sent to General Partner with full buyer profile and transaction documents.',
      status: 'complete',
      detail: 'GP receives structured consent pack — no phone calls, no paper. Response tracked in real time.',
    },
    {
      day: 'Day 5',
      title: 'GP Consent Received',
      description: 'General Partner has reviewed and approved the transfer. Transaction cleared to proceed.',
      status: 'complete',
      detail: 'GP consent recorded on blockchain. Immutable audit trail created.',
    },
    {
      day: 'Day 6',
      title: 'Smart Contract Initiated',
      description: 'Escrow smart contract deployed. Buyer funds locked. Transfer documents generated automatically.',
      status: 'complete',
      detail: 'Funds in escrow · Legal transfer docs auto-generated · Fund administrator notified',
    },
    {
      day: 'Day 7',
      title: 'Settlement Complete ✅',
      description: 'Ownership transferred. Funds released to seller. Cap table updated. Transaction complete.',
      status: 'complete',
      detail: 'Position transferred · Seller funds released · Capital call obligations updated · All parties notified',
    },
  ];

  const handleNext = () => {
    if (animating) return;
    if (step < steps.length - 1) {
      setAnimating(true);
      setTimeout(function() {
        setStep(function(s) { return s + 1; });
        setAnimating(false);
      }, 300);
    } else {
      onComplete();
    }
  };

  const totalBuyerExposure = listing.positionSize + listing.unfundedCommitment;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar right="Settlement Flow" />
      <div className="max-w-4xl mx-auto px-8 py-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Settlement in Progress</h2>
          <p className="text-gray-400">{listing.fundName} · {formatUSD(listing.askPrice)} · {listing.strategy}</p>
        </div>

        {/* Position Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Purchase Price</p>
              <p className="text-white text-xl font-bold">{formatUSD(listing.askPrice)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">NAV</p>
              <p className="text-white text-xl font-bold">{formatUSD(listing.nav)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Unfunded Commitment</p>
              <p className="text-yellow-400 text-xl font-bold">{listing.unfundedCommitment > 0 ? formatUSD(listing.unfundedCommitment) : 'None'}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Exposure</p>
              <p className="text-blue-400 text-xl font-bold">{formatUSD(totalBuyerExposure)}</p>
            </div>
          </div>
        </div>

        {/* Traditional vs PrivAltX timeline banner */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-red-400 text-sm font-medium">Traditional broker: 2—6 months</span>
            <span className="text-gray-600">vs</span>
            <span className="text-green-400 text-sm font-medium">PrivAltX: 7 days</span>
          </div>
          <span className="text-blue-400 text-sm font-bold">Up to 26x faster ⚡</span>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map(function(s, i) {
            const isComplete = i <= step;
            const isCurrent = i === step;
            return (
              <div key={i}
                className={'rounded-xl p-5 border transition-all duration-300 ' +
                  (isCurrent ? 'bg-blue-950 border-blue-600' :
                   isComplete ? 'bg-gray-900 border-gray-700' :
                   'bg-gray-900 border-gray-800 opacity-40')}>
                <div className="flex items-start gap-4">
                  <div className={'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ' +
                    (isComplete ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400')}>
                    {isComplete ? '✓' : i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-blue-400 text-xs font-medium">{s.day}</span>
                      <h3 className={'font-semibold ' + (isComplete ? 'text-white' : 'text-gray-500')}>{s.title}</h3>
                    </div>
                    {isComplete && (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">{s.description}</p>
                        <p className="text-gray-500 text-xs">{s.detail}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Settlement Progress</span>
            <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: (((step + 1) / steps.length) * 100) + '%' }}>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-colors text-lg">
          {step < steps.length - 1 ? 'Advance to Next Step →' : 'Complete Transaction ✅'}
        </button>
        <p className="text-gray-600 text-xs text-center mt-3">
          This is a simulated settlement flow for demonstration purposes.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('home');
  const [positionData, setPositionData] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleSelectRole = (selectedRole) => {
    if (selectedRole === 'seller') setScreen('seller');
    if (selectedRole === 'buyer') setScreen('marketplace');
  };

  const handlePositionSubmit = (data) => {
    setPositionData(data);
    setScreen('pricing');
  };

  const handleConfirmListing = () => {
    setScreen('confirmed');
  };

  const handleSelectListing = (listing) => {
    setSelectedListing(listing);
    setScreen('settlement');
  };

  const handleSettlementComplete = () => {
    setScreen('transactionComplete');
  };

  return (
    <div>
      {screen === 'home' && <RoleSelection onSelectRole={handleSelectRole} />}
      {screen === 'seller' && <SellerDashboard onSubmit={handlePositionSubmit} />}
      {screen === 'pricing' && positionData && <PricingEngine data={positionData} onConfirm={handleConfirmListing} />}
      {screen === 'confirmed' && (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-white text-3xl font-bold mb-4">Position Listed Successfully</h2>
          <p className="text-gray-400 text-lg mb-8">Your position is now live on the PrivAltX marketplace. Qualified buyers will be notified.</p>
          <button onClick={() => setScreen('home')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Return to Home
          </button>
        </div>
      )}
      {screen === 'marketplace' && <Marketplace onSelectListing={handleSelectListing} />}
      {screen === 'settlement' && selectedListing && (
        <SettlementFlow listing={selectedListing} onComplete={handleSettlementComplete} />
      )}
      {screen === 'transactionComplete' && (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-white text-3xl font-bold mb-4">Transaction Complete</h2>
          <p className="text-gray-400 text-lg mb-2">Settlement completed in 7 days.</p>
          <p className="text-gray-500 text-sm mb-8">Traditional brokers take 2—6 months for the same transaction.</p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 text-center">
            <p className="text-green-400 text-4xl font-bold mb-2">26x faster</p>
            <p className="text-gray-400 text-sm">than traditional secondary market settlement</p>
          </div>
          <button onClick={() => setScreen('home')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;