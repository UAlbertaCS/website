const Chat = () => {
  return (
    <div className="chat" id="chat">
      <div className="chat__container">
        <h2>Join the fight</h2>
        <h3 style={{ paddingBottom: 20 }}>Chat with Us</h3>
        <div>
          <iframe
            src="https://discord.com/widget?id=994077794214617218&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Chat;
