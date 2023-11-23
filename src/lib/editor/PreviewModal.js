import XIcon from "@duyank/icons/regular/X";
import { Preview } from "@lidojs/editor";

const PreviewModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1040,
        background: "rgba(13,18,22,.95)",
      }}
    >
   
      <Preview />
      <div
        style={{
          background: "#75AAF0",
          width: 35,
          height: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          right: 24,
          top: 24,
          borderRadius: "50%",
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <XIcon />
      </div>
    </div>
  );
};

export default PreviewModal;
