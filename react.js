function LoadTitle() {
  return "My Cool Website";
}

const container = document.getElementById("main");
const root = ReactDOM.createRoot(container);
root.render("<LoadTitle />");
