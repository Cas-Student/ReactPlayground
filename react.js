function LoadTitle() {
  return "My Cool Website";
}

const container = document.getElementById("title");
const root = ReactDOM.createRoot(container);
root.render("<LoadTitle />");
