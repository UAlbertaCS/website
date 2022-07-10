const Sign = () => {
  return (
    <div className="story" id="petition">
      <div className="story__container">
        <h2 style={{ paddingBottom: 20 }}>Sign the Petition</h2>
        <div>
          <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shrCIjbQTm7piMB6q?backgroundColor=blue"
            frameborder="0"
            onmousewheel=""
            width="50%"
            height="720"
          />
        </div>
      </div>
    </div>
  );
};
export default Sign;
