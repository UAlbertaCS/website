const Sign = () => {
  return (
    <div className="story" id="petition">
      <div className="story__container">
        <h2 style={{ paddingBottom: 20 }}>Sign the Petition</h2>
        <div>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrCIjbQTm7piMB6q?backgroundColor=blue"
            frameBorder="0"
            width="50%"
            height="720"
          />
        </div>
      </div>
    </div>
  );
};
export default Sign;
