import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { PageModel } from 'model/PageModel';
import { RootState } from 'store';
import { setSelectedIndexType } from 'store/nav/types';
import { setSelectedIndex } from 'store/nav/actions';

interface DispatchProps {
  setSelectedIndex: setSelectedIndexType;
}

interface StateProps {
  pages: PageModel[];
  selectedIndex: number;
}

type Props = DispatchProps & StateProps;

export class PageNavPure extends React.Component<Props> {
  static mapStateToProps: MapStateToProps<StateProps, {}, RootState> = ({ nav }) => {
    return {
      pages: nav.pages,
      selectedIndex: nav.selectedIndex
    };
  };

  static mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    setSelectedIndex: id => dispatch(setSelectedIndex(id))
  });

  render() {
    const { pages, selectedIndex } = this.props;

    if (pages.length === 0) return null;

    return (
      <div className="row">
        <div className="column column-20">
          {selectedIndex - 1 >= 0 && (
            <button
              className="button button-outline"
              onClick={() => {
                this.props.setSelectedIndex(selectedIndex - 1);
              }}
            >
              Back
            </button>
          )}
        </div>

        <div className="column column-20">
          {selectedIndex + 1 < pages.length && (
            <button
              className="button button-outline"
              onClick={() => {
                this.props.setSelectedIndex(selectedIndex + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

export const PageNav = connect<StateProps, DispatchProps, {}, RootState>(
  PageNavPure.mapStateToProps,
  PageNavPure.mapDispatchToProps
)(PageNavPure);
