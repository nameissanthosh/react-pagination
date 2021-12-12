import React from 'react';
import Pagination from './views/pagination/Pagination';

type Appprops = {}

type AppState = {
  exampleItems: any
  pageOfItems: [],
  currentPage: number
  pageSize: number
}


export default class App extends React.Component<Appprops, AppState> {

  constructor(props: any) {
    super(props);

    // an example array of items to be paged
    var exampleItems = [...Array(3000).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: [],
      currentPage: 1,
      pageSize: 10
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems: any) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            {this.state.pageOfItems.map((item: any) =>
              <div key={item.id}>{item.name}</div>
            )}
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} initialPage={1} pageSize={10} />
          </div>
        </div>
      </div>
    );
  }
}

