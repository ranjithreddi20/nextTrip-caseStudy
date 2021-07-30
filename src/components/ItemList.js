import React from 'react'

const ItemList = props => {
  const { list } = props
  return (
    <div>
      <ul data-testid='item-list-test-id' className="unordered-list">
        {list ? list.map(li => (
          <li key={li}>
            {li}
          </li>
        )): ''}
      </ul>
    </div>
  );
}

export default ItemList