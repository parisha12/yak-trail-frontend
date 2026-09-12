import Button from './Button';
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
