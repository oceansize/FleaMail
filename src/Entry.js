import React from 'react';

function Entry(props) {
  if (!props.entry.body) {
    return null;
  } else {
    return (
      <article className="entry">
        { props.entry.date && <h2 className="entry__date">{props.entry.date}</h2> }
        { props.entry.author && <p className="entry__author">{props.entry.author}</p> }
        { props.entry.recipient && <p className="entry__recipient">{props.entry.recipient}</p> }
        { props.entry.subject && <p className="entry__subject">{props.entry.subject}</p> }
        <p className="entry__body">{props.entry.body}</p>
      </article>
    );
  }
}

export default Entry;
