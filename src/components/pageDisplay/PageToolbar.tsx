import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { PageModel } from 'model/PageModel';
import { RootState } from 'store';
import { selectPageByIdType } from 'store/nav/types';
import { selectPageById } from 'store/nav/actions';

interface DispatchProps {
  selectPageById: selectPageByIdType;
}

interface StateProps {
  pages: PageModel[];
  selectedIndex: number;
}

type Props = DispatchProps & StateProps;

export class PageToolbarPure extends React.Component<Props> {
  static mapStateToProps: MapStateToProps<StateProps, {}, RootState> = ({ nav }) => {
    return {
      pages: nav.pages,
      selectedIndex: nav.selectedIndex
    };
  };

  static mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    selectPageById: id => dispatch(selectPageById(id))
  });

  select = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target) {
      // console.log('Page changes:', event.target.value);
      this.props.selectPageById(event.target.value);
    }
  };

  render() {
    const { pages, selectedIndex } = this.props;

    let value: string = '';
    if (selectedIndex > -1 && selectedIndex < pages.length) {
      value = pages[selectedIndex].id;
    }

    const options =
      pages.length > 0
        ? pages.map(x => {
            return (
              <option key={x.id} value={x.id}>
                {x.title}
              </option>
            );
          })
        : null;

    return (
      <div className="row">
        <div className="column column-100">
          <select value={value} onChange={this.select}>
            {options}
          </select>
        </div>
      </div>
    );
  }
}

export const PageToolbar = connect<StateProps, DispatchProps, {}, RootState>(
  PageToolbarPure.mapStateToProps,
  PageToolbarPure.mapDispatchToProps
)(PageToolbarPure);
