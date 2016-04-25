import React, { PropTypes } from 'react'
import { ActionCreators } from 'redux-devtools';
const { reset, rollback, commit, sweep, toggleAction } = ActionCreators;

class DevToolsActions extends React.Component {
  static propTypes = {
    styling: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleToggleAction = this.handleToggleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRollback = this.handleRollback.bind(this);
    this.handleSweep = this.handleSweep.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
  }

  handleRollback() {
    this.props.dispatch(rollback());
  }

  handleSweep() {
    this.props.dispatch(sweep());
  }

  handleCommit() {
    this.props.dispatch(commit());
  }

  handleToggleAction(id) {
    this.props.dispatch(toggleAction(id));
  }

  handleReset() {
    this.props.dispatch(reset());
  }

  render() {
    const { styling } = this.props
    return (
      <div {...styling('devToolsActions')}>
        <button {...styling('devToolsActionsButton')}
                type='button'
                onClick={this.handleReset}>
          Reset
        </button>
        <button {...styling('devToolsActionsButton')}
                type='button'
                onClick={this.handleRollback}>
          Rollback
        </button>
        <button {...styling('devToolsActionsButton')}
                type='button'
                onClick={this.handleSweep}>
          Sweep
        </button>
        <button {...styling('devToolsActionsButton')}
                type='button'
                onClick={this.handleCommit}>
          Commit
        </button>
      </div>
    )
  }
}

export default DevToolsActions;
