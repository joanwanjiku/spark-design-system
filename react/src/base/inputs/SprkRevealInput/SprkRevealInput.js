import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkTextInput from '../SprkTextInput/SprkTextInput';

class SprkRevealInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealControlId: uniqueId(),
      isRevealed: false,
    };
    this.toggleReveal = this.toggleReveal.bind(this);
  }

  toggleReveal() {
    this.setState(prevState => ({
      isRevealed: !prevState.isRevealed,
    }));
  }

  render() {
    const { isRevealed, revealControlId } = this.state;
    const { toggleLabel, ...rest } = this.props;
    return (
      <SprkTextInput type={isRevealed ? 'text' : 'password'} {...rest}>
        <div
          className="
          sprk-b-SelectionContainer
          sprk-b-InputContainer__visibility-toggle"
        >
          <input
            id={revealControlId}
            type="checkbox"
            onClick={this.toggleReveal}
          />
          <label
            htmlFor={revealControlId}
            className="sprk-b-Label sprk-b-Label--inline"
          >
            {toggleLabel}
          </label>
        </div>
      </SprkTextInput>
    );
  }
}

SprkRevealInput.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Value assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A function supplied will be passed
   * the value of the input and then executed,
   * if the valid prop is true. The value
   * returned will be assigned to the value of the input.
   */
  formatter: PropTypes.func,
  /**
   * Text that appears below the input,
   * intended to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * 	If true, will visually hide the label,
   *  using the value of the label prop as screen reader only text.
   */
  hiddenLabel: PropTypes.bool,
  /**
   * Value assigned
   * to the `data-id` attribute of the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * The text to render inside the label element.
   */
  label: PropTypes.string,
  /**
   * The name of the icon, when supplied,
   * will be rendered inside the input element.
   */
  leadingIcon: PropTypes.string,
  /**
   * If true, will render the
   * currency icon inside the input element.
   */
  textIcon: PropTypes.bool,
  /**
   * The text explaining the checkbox
   * that toggles the visibility of the input's content.
   */
  toggleLabel: PropTypes.string,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  valid: PropTypes.bool,
};

SprkRevealInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  formatter: value => value,
  helperText: '',
  hiddenLabel: false,
  idString: '',
  label: 'Text Input Label',
  leadingIcon: '',
  textIcon: false,
  toggleLabel: 'Show Value',
  valid: true,
};

export default SprkRevealInput;
