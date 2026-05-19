export default function ImagePlaceholder({ label, style = {} }) {
  return (
    <div
      style={{
        background: '#091428',
        border: '1.5px dashed rgba(201, 168, 76, 0.38)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        ...style,
      }}
    >
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        style={{ opacity: 0.45, flexShrink: 0 }}
      >
        <path
          d="M11 3L8.5 6H3C1.9 6 1 6.9 1 8V22C1 23.1 1.9 24 3 24H27C28.1 24 29 23.1 29 22V8C29 6.9 28.1 6 27 6H21.5L19 3H11ZM15 20C11.7 20 9 17.3 9 14C9 10.7 11.7 8 15 8C18.3 8 21 10.7 21 14C21 17.3 18.3 20 15 20Z"
          fill="rgba(201,168,76,0.6)"
        />
        <circle cx="15" cy="14" r="4" fill="rgba(201,168,76,0.3)" />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-outfit, "Outfit", sans-serif)',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(201, 168, 76, 0.65)',
          textAlign: 'center',
          padding: '0 14px',
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}
