import React, { useState, useRef, useEffect } from 'react';
import './temp.css';

// Dados de links (mantidos)
const linksData = [
    {
        title: 'Fluxo de Caixa',
        details: [
            { label: 'Caixa 2024', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=1646420574#gid=1646420574' },
            { label: 'Caixa 2025', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=323384915#gid=323384915' },
            { label: 'DRE', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=43794777#gid=43794777' },
            { label: 'Pagar', url: 'https://docs.google.com/spreadsheets/d/1YiTEGsnVU3h2dR7XTuJARxvhxcuce3tY/edit?gid=1463212614#gid=1463212614' },
            { label: 'Receber', url: 'https://docs.google.com/spreadsheets/d/1YiTEGsnVU3h2dR7XTuJARxvhxcuce3tY/edit?gid=1290641545#gid=1290641545' },
            { label: 'Vendas', url: 'https://docs.google.com/spreadsheets/d/1GAp-q9ZsE1EqWQYflqe33uHXYmMbG9Er/edit?gid=413788266#gid=413788266' },
        ],
    },
    {
        title: 'Agenda',
        details: [
            { label: 'Janeiro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=2101646376#gid=2101646376' },
            { label: 'Fevereiro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=62082485#gid=62082485' },
            { label: 'Março', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=1496906301#gid=1496906301' },
            { label: 'Abril', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=194261677#gid=194261677' },
            { label: 'Maio', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=2056246211#gid=2056246211' },
            { label: 'Junho', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=1184519790#gid=1184519790' },
            { label: 'Julho', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=35330986#gid=35330986' },
            { label: 'Agosto', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=848917058#gid=848917058' },
            { label: 'Setembro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=1914610076#gid=1914610076' },
            { label: 'Outubro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=1919489449#gid=1919489449' },
            { label: 'Novembro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=724424928#gid=724424928' },
            { label: 'Dezembro', url: 'https://docs.google.com/spreadsheets/d/1wiLuG9WP6prSj38FA9HD-IORP0BHAacB/edit?gid=1655173732#gid=1655173732' },
        ],
    },
    {
        title: 'Controle de Caixa Mensal',
        details: [
            { label: 'Janeiro', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=1692435402#gid=1692435402' },
            { label: 'Fevereiro', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=277788004#gid=277788004' },
            { label: 'Março', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=855070580#gid=855070580' },
            { label: 'Abril', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=1396417546#gid=1396417546' },
            { label: 'Maio', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=105527311#gid=105527311' },
            { label: 'Junho', url: 'https://docs.google.com/spreadsheets/d/1q2U-Z29sdJOcNU3HqsLdz6AOj9_tkaF7/edit?gid=819832553#gid=819832553' },
        ],
    },
    {
        title: 'Controle de Caixa Diario',
        details: [
            { label: 'Janeiro', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=1236402294#gid=1236402294' },
            { label: 'Fevereiro', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=1631642889#gid=1631642889' },
            { label: 'Março', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=1917866890#gid=1917866890' },
            { label: 'Abril', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=663305356#gid=663305356' },
            { label: 'Maio', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=2116535812#gid=2116535812' },
            { label: 'Junho', url: 'https://docs.google.com/spreadsheets/d/1GGbCN8K0aLEnpDMOlYOFhEzN8tXhQYz0/edit?gid=1389304362#gid=1389304362' },
        ],
    },
    {
        title: 'Estoque',
        details: [
            { label: 'Movimentações', url: 'https://docs.google.com/spreadsheets/d/16HvxMvtlWF8jJ6U6KR84yCU0-9be-KiB/edit?gid=477416491#gid=477416491' },
            { label: 'Estoque', url: 'https://docs.google.com/spreadsheets/d/16HvxMvtlWF8jJ6U6KR84yCU0-9be-KiB/edit?gid=1083536462#gid=1083536462' },
            { label: 'Produtos', url: 'https://docs.google.com/spreadsheets/d/16HvxMvtlWF8jJ6U6KR84yCU0-9be-KiB/edit?gid=1367958567#gid=1367958567' },
            { label: 'Vendas', url: 'https://docs.google.com/spreadsheets/d/16HvxMvtlWF8jJ6U6KR84yCU0-9be-KiB/edit?gid=1082001282#gid=1082001282' },
        ],
    },
    {
        title: 'Vendas',
        details: [
            { label: 'Douglas', url: 'https://docs.google.com/spreadsheets/d/1GAp-q9ZsE1EqWQYflqe33uHXYmMbG9Er/edit?gid=1166789790#gid=1166789790' },
            { label: 'André', url: 'https://docs.google.com/spreadsheets/d/1GAp-q9ZsE1EqWQYflqe33uHXYmMbG9Er/edit?gid=161509961#gid=161509961' },
            { label: 'Isomar / Ivair', url: 'https://docs.google.com/spreadsheets/d/1GAp-q9ZsE1EqWQYflqe33uHXYmMbG9Er/edit?gid=481758484#gid=481758484' },
        ],
    },
    {
        title: 'Outros',
        details: [
            { label: 'Orçamentos', url: 'https://docs.google.com/spreadsheets/d/1FeiLB_B7-c-1hWfbD_BAVRnzder3_W0D/edit?gid=1245822586#gid=1245822586' },
            { label: 'Custos', url: 'https://docs.google.com/spreadsheets/d/1xIi3cFLHYRg5zZLAPZ8WcPce-GQ2LH6w/edit?gid=335062991#gid=335062991' },
            { label: 'Laminados Preços', url: 'https://docs.google.com/spreadsheets/d/1K4sbyyYXxQ3ky8_0KU9iuxhlDYH5Yd_X/edit?gid=833691149#gid=833691149' },
            { label: 'Telefones', url: 'https://docs.google.com/spreadsheets/d/1bd8PQ1efyGK5VdTbjyd6ZkSvuXpnQzbw/edit?gid=492519997#gid=492519997' },
        ],
    },
];

// Utilitários
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text, words) {
  if (!words || words.length === 0) return text;
  let result = text;
  words.forEach(word => {
    if (word !== '') {
      const regex = new RegExp(escapeRegExp(word), 'gi');
      result = result.replace(regex, match => `<span class="highlight">${match}</span>`);
    }
  });
  return result;
}

// Componentes
function LockOverlay({ password, setPassword, onUnlock, showError, inputRef }) {
  return (
    <div className="lockOverlay">
      <h2>Digite a senha para desbloquear</h2>
      <input
        type="password"
        ref={inputRef}
        value={password}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onUnlock()}
        placeholder="Senha"
      />
      <button onClick={onUnlock}>Desbloquear</button>
      {showError && <p className="lock-msg">Senha incorreta!</p>}
    </div>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

function LinkList({ items, words, openIndexes, onToggle, search }) {
  return (
    <ul className="linkList">
      {items.map(({ title, details, visible, idx }) =>
        visible && (
          <li key={title}>
            <a
              href=" "
              className="link"
              onClick={e => {
                e.preventDefault();
                if (!search) onToggle(idx);
              }}
              dangerouslySetInnerHTML={{
                __html: highlightText(title, words),
              }}
            />
            <div
              className={`link-details ${search || openIndexes.includes(idx) ? 'show' : ''}`}
            >
              {details.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(label, words),
                  }}
                />
              ))}
            </div>
          </li>
        )
      )}
    </ul>
  );
}

// Componente principal
export default function Admin() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('unlocked') === 'true');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [search, setSearch] = useState('');
  const [openIndexes, setOpenIndexes] = useState([]);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    if (!unlocked && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [unlocked]);

  const handleUnlock = () => {
    if (password === 'Jm@42440') {
      setUnlocked(true);
      sessionStorage.setItem('unlocked', 'true');
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleToggle = idx => {
    setOpenIndexes(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const words = search.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const filteredLinks = linksData.map((item, idx) => {
    const detailsText = item.details.map(d => d.label).join(' ').toLowerCase();
    const mainText = item.title.toLowerCase();
    const combined = mainText + ' ' + detailsText;
    const match = words.every(word => combined.includes(word));
    return { ...item, visible: match || words.length === 0, idx };
  });

  return (
    <div className="admin-container">
      {!unlocked && (
        <LockOverlay
          password={password}
          setPassword={setPassword}
          onUnlock={handleUnlock}
          showError={showError}
          inputRef={passwordInputRef}
        />
      )}
      <div className={`content${!unlocked ? ' locked' : ''}`}>
        <h1 className="title">JM Carpintaria - Planilhas</h1>
        <SearchBar value={search} onChange={setSearch} />
        <LinkList
          items={filteredLinks}
          words={words}
          openIndexes={openIndexes}
          onToggle={handleToggle}
          search={search}
        />
      </div>
    </div>
  );
}
