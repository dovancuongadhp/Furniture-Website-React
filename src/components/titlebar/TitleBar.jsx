import React from "react";
import "@styles/titlebar.scss";
export default function TitleBar({namePage}) {
  return (
    <div className="titlebar__container">
      <div className="titlebar__inner">
        <h3 className="name__page">{namePage}</h3>
        <div className="current__link">
          <span className="prev">Home</span>
            <span className="material-symbols-outlined arrow">chevron_right</span>
          <span className="current">{namePage}</span>
        </div>
      </div>
    </div>
  );
}
