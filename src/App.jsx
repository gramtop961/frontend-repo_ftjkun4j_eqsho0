import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ChaptersSection from './components/ChaptersSection.jsx';
import ResourceModal from './components/ResourceModal.jsx';

// Static catalog of 20 IBDP Mathematics AA HL chapters with sample resources
const CHAPTERS = [
  {
    id: 1,
    title: 'Algebraic Structures & Proof',
    topics: ['proof by contradiction', 'induction', 'inequalities'],
    resources: {
      lectures: [
        { title: 'Direct and Contradiction Proofs', url: '#' },
        { title: 'Mathematical Induction Essentials', url: '#' },
        { title: 'Inequalities and AM-GM', url: '#' },
      ],
      notes: [
        { title: 'Proof Techniques Summary', url: '#' },
        { title: 'Induction Templates', url: '#' },
        { title: 'Common Algebraic Inequalities', url: '#' },
      ],
      exercises: [
        { title: 'Proof Practice Set A', url: '#' },
        { title: 'Induction Mixed Problems', url: '#' },
        { title: 'Inequality Challenge Problems', url: '#' },
      ],
    },
  },
  {
    id: 2,
    title: 'Functions & Graphs',
    topics: ['domain & range', 'transformations', 'inverse functions'],
    resources: {
      lectures: [
        { title: 'Function Basics and Notation', url: '#' },
        { title: 'Graph Transformations Deep Dive', url: '#' },
        { title: 'Inverse Functions', url: '#' },
      ],
      notes: [
        { title: 'Transformations Cheat Sheet', url: '#' },
        { title: 'Function Families Overview', url: '#' },
        { title: 'Inverses & Composition', url: '#' },
      ],
      exercises: [
        { title: 'Transformation Drills', url: '#' },
        { title: 'Domain & Range Practice', url: '#' },
        { title: 'Inverse Functions Problems', url: '#' },
      ],
    },
  },
  {
    id: 3,
    title: 'Polynomial Functions',
    topics: ['factor theorem', 'remainder theorem', 'roots & multiplicity'],
    resources: {
      lectures: [
        { title: 'Polynomials and Graph Behaviour', url: '#' },
        { title: 'Factor & Remainder Theorems', url: '#' },
        { title: 'Solving Higher-Degree Equations', url: '#' },
      ],
      notes: [
        { title: 'Polynomial Identities', url: '#' },
        { title: 'Graph Characteristics', url: '#' },
        { title: 'Synthetic Division Guide', url: '#' },
      ],
      exercises: [
        { title: 'Roots and Factors', url: '#' },
        { title: 'Graphing Practice', url: '#' },
        { title: 'Inequalities with Polynomials', url: '#' },
      ],
    },
  },
  {
    id: 4,
    title: 'Exponential & Logarithmic Functions',
    topics: ['laws of logs', 'exponential equations', 'growth & decay'],
    resources: {
      lectures: [
        { title: 'Exponential Models', url: '#' },
        { title: 'Logarithms and Their Laws', url: '#' },
        { title: 'Solving Exponential/Log Equations', url: '#' },
      ],
      notes: [
        { title: 'Log Laws Reference', url: '#' },
        { title: 'Change of Base & Properties', url: '#' },
        { title: 'Growth/Decay Summary', url: '#' },
      ],
      exercises: [
        { title: 'Exponential Equations', url: '#' },
        { title: 'Logarithmic Equations', url: '#' },
        { title: 'Applied Modelling Problems', url: '#' },
      ],
    },
  },
  {
    id: 5,
    title: 'Sequences & Series (incl. Binomial)',
    topics: ['arithmetic', 'geometric', 'binomial expansion'],
    resources: {
      lectures: [
        { title: 'Arithmetic & Geometric Sequences', url: '#' },
        { title: 'Series and Sigma Notation', url: '#' },
        { title: 'Binomial Theorem', url: '#' },
      ],
      notes: [
        { title: 'Series Formulas Sheet', url: '#' },
        { title: 'Convergence Basics', url: '#' },
        { title: 'Binomial Coefficients', url: '#' },
      ],
      exercises: [
        { title: 'Sequence Term Problems', url: '#' },
        { title: 'Partial Sums Practice', url: '#' },
        { title: 'Binomial Expansion', url: '#' },
      ],
    },
  },
  {
    id: 6,
    title: 'Trigonometric Functions',
    topics: ['unit circle', 'graphs', 'inverse trig'],
    resources: {
      lectures: [
        { title: 'Unit Circle Intuition', url: '#' },
        { title: 'Trig Graphs & Transformations', url: '#' },
        { title: 'Inverse Trig Functions', url: '#' },
      ],
      notes: [
        { title: 'Special Angles', url: '#' },
        { title: 'Trig Graphs Reference', url: '#' },
        { title: 'Inverse Trig Domains', url: '#' },
      ],
      exercises: [
        { title: 'Exact Values Practice', url: '#' },
        { title: 'Graphing Tasks', url: '#' },
        { title: 'Inverse Trig Problems', url: '#' },
      ],
    },
  },
  {
    id: 7,
    title: 'Trig Identities & Equations',
    topics: ['Pythagorean', 'compound angle', 'equations'],
    resources: {
      lectures: [
        { title: 'Core Identities Derivations', url: '#' },
        { title: 'Compound & Double-Angle', url: '#' },
        { title: 'Solving Trig Equations', url: '#' },
      ],
      notes: [
        { title: 'Identity Toolbox', url: '#' },
        { title: 'Solving Strategies', url: '#' },
        { title: 'Common Pitfalls', url: '#' },
      ],
      exercises: [
        { title: 'Identity Proof Drills', url: '#' },
        { title: 'Equation Solving Sets', url: '#' },
        { title: 'Exact Trig Challenges', url: '#' },
      ],
    },
  },
  {
    id: 8,
    title: 'Vectors in 3D',
    topics: ['scalar & vector products', 'lines & planes', 'angles'],
    resources: {
      lectures: [
        { title: 'Vector Operations', url: '#' },
        { title: 'Lines and Planes in 3D', url: '#' },
        { title: 'Angles & Distances', url: '#' },
      ],
      notes: [
        { title: 'Dot & Cross Product', url: '#' },
        { title: 'Equations of Lines/Planes', url: '#' },
        { title: 'Geometric Interpretations', url: '#' },
      ],
      exercises: [
        { title: 'Vector Algebra', url: '#' },
        { title: 'Line/Plane Problems', url: '#' },
        { title: 'Angle & Distance Problems', url: '#' },
      ],
    },
  },
  {
    id: 9,
    title: 'Complex Numbers',
    topics: ['Argand plane', 'polar form', 'De Moivre'],
    resources: {
      lectures: [
        { title: 'Complex Number Basics', url: '#' },
        { title: 'Polar and Euler Form', url: '#' },
        { title: "De Moivre's Theorem", url: '#' },
      ],
      notes: [
        { title: 'Argand Geometry', url: '#' },
        { title: 'Roots of Unity', url: '#' },
        { title: 'Loci in the Argand Plane', url: '#' },
      ],
      exercises: [
        { title: 'Algebra with Complex Numbers', url: '#' },
        { title: 'Polar Form Practice', url: '#' },
        { title: 'Powers and Roots', url: '#' },
      ],
    },
  },
  {
    id: 10,
    title: 'Matrices & Transformations',
    topics: ['matrix algebra', 'determinants', 'transformations'],
    resources: {
      lectures: [
        { title: 'Matrix Operations', url: '#' },
        { title: 'Determinants & Inverses', url: '#' },
        { title: 'Geometric Transformations', url: '#' },
      ],
      notes: [
        { title: 'Matrix Properties', url: '#' },
        { title: 'Solving Systems with Matrices', url: '#' },
        { title: 'Transformations Guide', url: '#' },
      ],
      exercises: [
        { title: 'Matrix Algebra Sets', url: '#' },
        { title: 'Inverse/Determinant Tasks', url: '#' },
        { title: 'Transformation Problems', url: '#' },
      ],
    },
  },
  {
    id: 11,
    title: 'Limits & Continuity',
    topics: ['limit laws', 'continuity', 'asymptotes'],
    resources: {
      lectures: [
        { title: 'Understanding Limits', url: '#' },
        { title: 'Continuity and Discontinuities', url: '#' },
        { title: 'Asymptotes & Behaviour', url: '#' },
      ],
      notes: [
        { title: 'Limit Laws', url: '#' },
        { title: 'Epsilon-Delta Intuition', url: '#' },
        { title: 'Graphical Behaviour', url: '#' },
      ],
      exercises: [
        { title: 'Evaluate Limits', url: '#' },
        { title: 'Continuity Problems', url: '#' },
        { title: 'Asymptote Practice', url: '#' },
      ],
    },
  },
  {
    id: 12,
    title: 'Differentiation Techniques',
    topics: ['product/quotient rule', 'chain rule', 'implicit diff'],
    resources: {
      lectures: [
        { title: 'Core Rules Recap', url: '#' },
        { title: 'Implicit Differentiation', url: '#' },
        { title: 'Higher Order Derivatives', url: '#' },
      ],
      notes: [
        { title: 'Derivative Reference Sheet', url: '#' },
        { title: 'Chain Rule Patterns', url: '#' },
        { title: 'Implicit Tricks', url: '#' },
      ],
      exercises: [
        { title: 'Rules Mixed Practice', url: '#' },
        { title: 'Implicit Problems', url: '#' },
        { title: 'Rates of Change', url: '#' },
      ],
    },
  },
  {
    id: 13,
    title: 'Applications of Differentiation',
    topics: ['optimization', 'curve sketching', 'related rates'],
    resources: {
      lectures: [
        { title: 'Optimization Strategy', url: '#' },
        { title: 'Sketching with Derivatives', url: '#' },
        { title: 'Related Rates', url: '#' },
      ],
      notes: [
        { title: 'Critical Points & Tests', url: '#' },
        { title: 'Sketching Checklist', url: '#' },
        { title: 'Related Rates Setups', url: '#' },
      ],
      exercises: [
        { title: 'Optimization Problems', url: '#' },
        { title: 'Sketching Practice', url: '#' },
        { title: 'Related Rates Drills', url: '#' },
      ],
    },
  },
  {
    id: 14,
    title: 'Integration Techniques',
    topics: ['substitution', 'by parts', 'partial fractions'],
    resources: {
      lectures: [
        { title: 'Antiderivatives Basics', url: '#' },
        { title: 'Integration by Substitution', url: '#' },
        { title: 'By Parts & Partial Fractions', url: '#' },
      ],
      notes: [
        { title: 'Integrals Formula Sheet', url: '#' },
        { title: 'Substitution Patterns', url: '#' },
        { title: 'Partial Fraction Cases', url: '#' },
      ],
      exercises: [
        { title: 'Substitution Practice', url: '#' },
        { title: 'By Parts Problems', url: '#' },
        { title: 'Partial Fraction Sets', url: '#' },
      ],
    },
  },
  {
    id: 15,
    title: 'Applications of Integration',
    topics: ['area/volume', 'accumulation', 'average value'],
    resources: {
      lectures: [
        { title: 'Area Between Curves', url: '#' },
        { title: 'Solids of Revolution', url: '#' },
        { title: 'Accumulation Models', url: '#' },
      ],
      notes: [
        { title: 'Geometric Applications', url: '#' },
        { title: 'Volume Methods', url: '#' },
        { title: 'Average Value', url: '#' },
      ],
      exercises: [
        { title: 'Area & Volume Problems', url: '#' },
        { title: 'Arc Length/Surface Area', url: '#' },
        { title: 'Applied Integrals', url: '#' },
      ],
    },
  },
  {
    id: 16,
    title: 'Differential Equations',
    topics: ['separable', 'first-order', 'slope fields'],
    resources: {
      lectures: [
        { title: 'Separable DEs', url: '#' },
        { title: 'Linear First-Order DEs', url: '#' },
        { title: 'Slope Fields & Solutions', url: '#' },
      ],
      notes: [
        { title: 'DE Methods Summary', url: '#' },
        { title: 'Slope Field Guide', url: '#' },
        { title: 'Modelling with DEs', url: '#' },
      ],
      exercises: [
        { title: 'Separable Practice', url: '#' },
        { title: 'Linear DE Problems', url: '#' },
        { title: 'Applied DE Scenarios', url: '#' },
      ],
    },
  },
  {
    id: 17,
    title: 'Probability',
    topics: ['conditional', 'combinatorics', 'Bayes'],
    resources: {
      lectures: [
        { title: 'Counting & Combinatorics', url: '#' },
        { title: 'Conditional Probability', url: '#' },
        { title: "Bayes' Theorem", url: '#' },
      ],
      notes: [
        { title: 'Counting Principles', url: '#' },
        { title: 'Probability Rules', url: '#' },
        { title: 'Bayes Worked Examples', url: '#' },
      ],
      exercises: [
        { title: 'Counting Problems', url: '#' },
        { title: 'Conditional Sets', url: '#' },
        { title: 'Bayes Applications', url: '#' },
      ],
    },
  },
  {
    id: 18,
    title: 'Statistics & Distributions',
    topics: ['random variables', 'normal', 'regression'],
    resources: {
      lectures: [
        { title: 'Discrete/Continuous RVs', url: '#' },
        { title: 'Normal Distribution', url: '#' },
        { title: 'Correlation & Regression', url: '#' },
      ],
      notes: [
        { title: 'Stats Formulas', url: '#' },
        { title: 'Z-scores & Tables', url: '#' },
        { title: 'Least Squares Notes', url: '#' },
      ],
      exercises: [
        { title: 'RV Problems', url: '#' },
        { title: 'Normal Distribution Tasks', url: '#' },
        { title: 'Regression Practice', url: '#' },
      ],
    },
  },
  {
    id: 19,
    title: 'Numerical Methods',
    topics: ['iteration', 'Newton-Raphson', 'approximation'],
    resources: {
      lectures: [
        { title: 'Iterative Methods', url: '#' },
        { title: 'Newton-Raphson Method', url: '#' },
        { title: 'Error & Convergence', url: '#' },
      ],
      notes: [
        { title: 'Iteration Notes', url: '#' },
        { title: 'Root-Finding Guide', url: '#' },
        { title: 'Error Bounds', url: '#' },
      ],
      exercises: [
        { title: 'Fixed Point Iteration', url: '#' },
        { title: 'Newton-Raphson Problems', url: '#' },
        { title: 'Approximation Sets', url: '#' },
      ],
    },
  },
  {
    id: 20,
    title: 'Mathematical Modelling & IA Skills',
    topics: ['modelling cycle', 'technology', 'communication'],
    resources: {
      lectures: [
        { title: 'The Modelling Cycle', url: '#' },
        { title: 'Technology for IA', url: '#' },
        { title: 'Writing & Reflection', url: '#' },
      ],
      notes: [
        { title: 'IA Criteria Explained', url: '#' },
        { title: 'Model Selection Tips', url: '#' },
        { title: 'Communication & Structure', url: '#' },
      ],
      exercises: [
        { title: 'Mini Modelling Tasks', url: '#' },
        { title: 'Data Exploration', url: '#' },
        { title: 'IA Planning Checklist', url: '#' },
      ],
    },
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filteredChapters = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CHAPTERS;
    return CHAPTERS.filter((c) =>
      c.title.toLowerCase().includes(q) || c.topics.join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Navbar query={query} onQueryChange={setQuery} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <ChaptersSection chapters={filteredChapters} onSelect={setSelected} />
      </main>
      <ResourceModal chapter={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
