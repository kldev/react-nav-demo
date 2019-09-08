import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { PageModel } from 'model/PageModel';
import { RootState } from 'store';
import { PageTypes } from 'model/PageTypes';
import { YodaPage } from 'components/pages/YodaPage';
import { ElmoPage } from 'components/pages/ElmoPage';

interface DispatchProps {}

interface StateProps {
  pages: PageModel[];
  selectedIndex: number;
}

type Props = DispatchProps & StateProps;

export class PageDisplayPure extends React.Component<Props> {
  static mapStateToProps: MapStateToProps<StateProps, {}, RootState> = ({ nav }) => {
    return {
      pages: nav.pages,
      selectedIndex: nav.selectedIndex
    };
  };

  static mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({});

  render() {
    const { pages, selectedIndex } = this.props;

    if (pages.length === 0) {
      return (
        <div className="row">
          <div className="column column-100">No Pages</div>
        </div>
      );
    }

    if (selectedIndex > -1 && selectedIndex < pages.length) {
      const pageModel = pages[selectedIndex];

      switch (pageModel.type) {
        case PageTypes.Elmo:
          return <ElmoPage {...pageModel} />;

        case PageTypes.Yoda:
          return <YodaPage {...pageModel} />;
      }
    }

    return (
      <div className="row" style={{ minHeight: '60vh' }}>
        <div className="column column-100">
          <p>Unexpected error</p>
        </div>
      </div>
    );
  }
}

export const PageDisplay = connect<StateProps, DispatchProps, {}, RootState>(
  PageDisplayPure.mapStateToProps,
  PageDisplayPure.mapDispatchToProps
)(PageDisplayPure);
