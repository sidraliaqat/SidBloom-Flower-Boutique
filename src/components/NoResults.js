import React from 'react';

function NoResults() {
  return (
    <div className="no-results">
      <span className="emoji">🌱</span>
      <h2>No blooms found</h2>
      <p>We couldn't find any flowers matching your search</p>
      <p className="suggestion">🌸 Try adjusting your filters or search term</p>
    </div>
  );
}

export default NoResults;