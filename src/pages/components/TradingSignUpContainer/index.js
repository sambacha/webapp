import React, { Component } from 'react'
import { Modal, Button, TextInput, TileGroup, RadioTile, SkeletonText } from 'carbon-components-react'
import { ChevronLeft20, Phone20, Email20, CheckmarkOutline32 } from '@carbon/icons-react'
import { BannerContainer } from 'gatsby-theme-carbon/src/templates/HomepageComponents'
import './styles.scss'

const modalProps = [
  // Step 0
  {
    modalLabel: 'Enter your credentials',
    buttonText: 'Submit',
    helperText: (
      <h5>
        Forgot password? Reset it <a href="#top">here</a>
      </h5>
    ),
    renderContent: () => (
      <div>
        <TextInput labelText="User ID" placeholder="User ID" id="userID" />
        <TextInput.PasswordInput
          labelText="Password"
          placeholder="Password"
          id="password"
        />
      </div>
    )
  },
  // Step 1
  {
    modalLabel: 'Verify your identity',
    buttonText: 'Continue',
    contentText: 'Where would you like to send your security code?',
    renderContent: () => (
      <div>
        <TileGroup
          defaultSelected="default-selected"
          name="tile-group"
        >
          <RadioTile
            light={false}
            name="tiles"
            tabIndex={0}
            value="standard"
          >
            <div className="tile-display-flex">
              <span className="radio-title-left-icon"><Phone20 /></span>
              <span>Phone</span>
              <span className="radio-title-right-span">*** *** 2313</span>
            </div>
          </RadioTile>
          <RadioTile
            id="tile-2"
            light={false}
            name="tiles"
            tabIndex={0}
            value="default-selected"
          >
            <div className="tile-display-flex">
              <span className="radio-title-left-icon"><Email20 /></span>
              <span>Email</span>
              <span className="radio-title-right-span">a..z@freighttrust.com</span>
            </div>
          </RadioTile>
        </TileGroup>
      </div>
    )
  },
  // Step 2
  {
    modalLabel: 'Select your account',
    buttonText: 'Continue',
    renderContent: () => (
      <div>
        <TileGroup
          defaultSelected="default-selected"
          name="tile-group"
        >
          <RadioTile
            light={false}
            name="tiles"
            tabIndex={0}
            value="standard"
          >
            <div className="tile-display-flex">
              <span>Plaid Savings</span>
            </div>
            <div className="tile-display-flex">
              <span>******* 9606</span>
              <span className="radio-title-right-span">$1,203.42</span>
            </div>
          </RadioTile>

          <RadioTile
            id="tile-2"
            light={false}
            name="tiles"
            tabIndex={0}
            value="default-selected"
          >
            <div className="tile-display-flex">
              <span>Plaid Savings</span>
            </div>
            <div className="tile-display-flex">
              <span>******* 9606</span>
              <span className="radio-title-right-span">$1,203.42</span>
            </div>
          </RadioTile>

          <RadioTile
            id="tile-3"
            light={false}
            name="tiles"
            tabIndex={0}
            value="default-selected3"
          >
            <div className="tile-display-flex">
              <span>Plaid Savings</span>
            </div>
            <div className="tile-display-flex">
              <span>******* 9606</span>
              <span className="radio-title-right-span">$1,203.42</span>
            </div>
          </RadioTile>
        </TileGroup>
      </div>
    )
  },
  // Step 3
  {
    modalLabel: 'Verify your identity',
    buttonText: 'Continue',
    contentText: <span>Enter the code sent to<br/>*** *** 2313</span>,
    helperText: (
      <h5>
        Still waiting? Try a different device
      </h5>
    ),
    renderContent: () => (
      <div>
        <TextInput placeholder="Code" id="code" />
      </div>
    )
  },
  // Step 4
  {
    modalLabel: 'Loading',
    helperText: (
      <h5>
        Authorizing with our servers
      </h5>
    ),
    renderContent: () => (
      <div>
        <SkeletonText
          heading={true}
          width="100%"
        />
        <SkeletonText
          heading={true}
          width="100%"
        />
      </div>
    )
  },
  // Step 5
  {
    modalLabel: 'Success',
    buttonText: 'Continue',
    renderContent: () => (
      <div style={{textAlign: 'center'}}>
        <CheckmarkOutline32 style={{width: 60, height: 60}} />
        <h4>Your account was successfully linked to Freight Trust</h4>
      </div>
    )
  },
]

class TradingSignUpContainer extends Component {
  state = {
    modalVisible: false,
    currentStep: 0,
  }

  showModal = (visible = true) => {
    console.log('showModal', visible)
    this.setState({ modalVisible: visible, currentStep: 0 })
  }

  goToNextStep = () => {
    const { currentStep } = this.state
    if (currentStep === 5) {
      this.setState({modalVisible: false})
      return;
    }
    if (currentStep === 3) {
      const _this = this;
      setTimeout(() => {
        _this.goToNextStep()
      }, 3000)
    }
    this.setState({currentStep: currentStep + 1})
  }

  goToPrevStep = () => {
    const { currentStep } = this.state
    if (currentStep === 5) {
      this.setState({currentStep: 3})
      return;
    }

    if (currentStep > 0)
      this.setState({currentStep: currentStep - 1})
  }

  render() {
    const { modalVisible, currentStep } = this.state

    const {modalLabel, buttonText, renderContent, helperText, contentText} = modalProps[currentStep] ? modalProps[currentStep] : {}

    const tradingSignUpModal = (
      <Modal
        passiveModal
        size="xs"
        modalLabel={modalLabel}
        className="trading-signup-modal"
        open={modalVisible}
        onRequestClose={() => this.showModal(false)}
      >
        <h2>AMERICAN EXPRESS</h2>
        {contentText && <h5>{contentText}</h5>}
        {renderContent && renderContent()}
        {
          buttonText &&
          <Button size="field" className="submit-btn" onClick={() => this.goToNextStep()}>
            {buttonText}
          </Button>
        }
        {helperText}
        <Button kind="ghost" className="back-btn" onClick={() => this.goToPrevStep()}>
          <ChevronLeft20 />
        </Button>
      </Modal>
    )

    console.log('Trading sign up', this)
    return (
      <div>
        <BannerContainer
          title="Trading Partner Page"
          content="Sign up page for trading partners of freight trust"
          buttonLabel="Click to open sign up modal"
          buttonAction={this.showModal}
        />
        {tradingSignUpModal}
      </div>
    )
  }
}

export default TradingSignUpContainer
