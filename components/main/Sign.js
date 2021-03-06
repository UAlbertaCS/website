const Sign = () => {
  return (
    <div className="story" id="petition">
      <div className="story__container">
        <h2>Sign the Petition</h2>
        <div className="story__iframe">
          <div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/shrCIjbQTm7piMB6q?backgroundColor=blue"
              frameBorder="0"
              width="100%"
              height="720"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign;
