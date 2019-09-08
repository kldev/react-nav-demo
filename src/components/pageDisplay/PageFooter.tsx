import React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { PageModel } from 'model/PageModel';
import { RootState } from 'store';

import { addPage, selectPageById } from 'store/nav/actions';
import { addPageType, selectPageByIdType } from 'store/nav/types';

import { lorem } from 'faker';
import { v1 } from 'uuid';

import { PageTypes } from 'model/PageTypes';

interface DispatchProps {
  addPage: addPageType;
  selectPageById: selectPageByIdType;
}

interface StateProps {}

type Props = DispatchProps & StateProps;

export class PageFooterPure extends React.Component<Props> {
  static mapStateToProps: MapStateToProps<StateProps, {}, RootState> = ({ nav }) => {
    return {};
  };

  static mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    addPage: page => dispatch(addPage(page)),
    selectPageById: id => dispatch(selectPageById(id))
  });

  addElmo = () => {
    const id = v1();

    const model: PageModel = {
      type: PageTypes.Elmo,
      id: id,
      text: lorem.sentence(25),
      title: `Elmo page ${id}`
    };

    this.props.addPage(model);
    this.props.selectPageById(id);
  };

  addYoda = () => {
    const id = v1();

    const model: PageModel = {
      type: PageTypes.Yoda,
      id: id,
      text: lorem.sentence(25),
      title: `Yoda page ${id}`
    };

    this.props.addPage(model);
    this.props.selectPageById(id);
  };

  render() {
    return (
      <div className="row">
        <div className="column column-20">
          <button className="button button-outline" onClick={() => this.addElmo()}>
            Add elmo
          </button>
        </div>
        <div className="column column-20">
          <button className="button button-outline" onClick={() => this.addYoda()}>
            Add Yoda
          </button>
        </div>
      </div>
    );
  }
}

export const PageFooter = connect<StateProps, DispatchProps, {}, RootState>(
  PageFooterPure.mapStateToProps,
  PageFooterPure.mapDispatchToProps
)(PageFooterPure);
