import React, { Component } from 'react'
import { Modal, Button, TextInput, Loading } from 'carbon-components-react'
import { ChevronLeft20, CheckmarkOutline32 } from '@carbon/icons-react'
import { BannerContainer } from 'gatsby-theme-carbon/src/templates/HomepageComponents'
import './styles.scss'

const modalProps = [
  // Step 0
  {
    modalLabel: 'Trading Channel',
    headerLabel: 'Trading Channel',
    buttonText: 'Submit',
    helperText: null,
    renderContent: () => (
      <div>
        <TextInput
          labelText="Company Name"
          placeholder="Company Name"
          id="companyName"
        />
        <TextInput
          labelText="Company Legal Identifier"
          placeholder="Company Legal Identifier"
          id="companyLegalID"
        />
        <TextInput labelText="Your Email" placeholder="Email" id="email" />
      </div>
    ),
  },
  // Step 1
  {
    modalLabel: 'Verify Connection',
    headerLabel: 'Verify Connection',
    buttonText: 'Submit',
    renderContent: () => (
      <div>
        <TextInput labelText="AS2 ID" placeholder="AS2 ID" id="as2ID" />
        <TextInput labelText="AS2 URL" placeholder="AS2 URL" id="as2Url" />
        <TextInput
          labelText="0x PUBLIC ADDRESS"
          placeholder="0x PUBLIC ADDRESS"
          id="publicAddress"
        />
      </div>
    ),
  },
  // Step 2
  {
    modalLabel: 'Verify Information',
    contentTexts: [
      'Verifying as2 id...',
      'Resolving as2 url...',
      'Authenticated',
    ],
    renderContent: () => (
      <div>
        <Loading description="Active loading indicator" withOverlay={false} />
      </div>
    ),
  },
  // Step 3
  {
    modalLabel: 'Success',
    headerLabel: 'Success',
    buttonText: 'Redirect',
    renderContent: () => (
      <div style={{ textAlign: 'center' }}>
        <CheckmarkOutline32 style={{ width: 60, height: 60 }} />
        <h4>Corporate Authentication Confirmed</h4>
      </div>
    ),
  },
]

class TradingSignUpContainer extends Component {
  state = {
    modalVisible: false,
    currentStep: 0,
    currentContentStep: 0,
  }

  showModal = (visible = true) => {
    this.setState({
      modalVisible: visible,
      currentStep: 0,
      currentContentStep: 0,
    })
  }

  goToNextContentStep = () => {
    const { currentContentStep, currentStep } = this.state

    if (currentContentStep === 2) {
      this.setState({ currentStep: currentStep + 1 })
      return
    }

    const _this = this
    setTimeout(() => {
      _this.goToNextContentStep()
    }, 2000)

    this.setState({ currentContentStep: currentContentStep + 1 })
  }

  goToNextStep = () => {
    const { currentStep } = this.state

    if (currentStep === 3) {
      this.setState({ modalVisible: false })
      return
    }

    if (currentStep === 1) {
      const _this = this
      setTimeout(() => {
        _this.goToNextContentStep()
      }, 2000)
    }
    this.setState({ currentStep: currentStep + 1 })
  }

  goToPrevStep = () => {
    const { currentStep } = this.state
    if (currentStep === 5) {
      this.setState({ currentStep: 3 })
      return
    }

    if (currentStep > 0) this.setState({ currentStep: currentStep - 1 })
  }

  render() {
    const { modalVisible, currentStep, currentContentStep } = this.state

    const {
      modalLabel,
      headerLabel,
      buttonText,
      renderContent,
      helperText,
      contentText,
      contentTexts,
    } = modalProps[currentStep] ? modalProps[currentStep] : {}

    const tradingSignUpModal = (
      <Modal
        passiveModal
        size="xs"
        modalLabel={modalLabel}
        className="trading-signup-modal"
        open={modalVisible}
        onRequestClose={() => this.showModal(false)}
      >
        <h2>{headerLabel}</h2>
        {contentText && <h5>{contentText}</h5>}
        {contentTexts && <h5>{contentTexts[currentContentStep]}</h5>}
        {renderContent && renderContent()}
        {buttonText && (
          <Button
            size="field"
            className="submit-btn"
            onClick={() => this.goToNextStep()}
          >
            {buttonText}
          </Button>
        )}
        {helperText}
        <Button
          kind="ghost"
          className="back-btn"
          onClick={() => this.goToPrevStep()}
        >
          <ChevronLeft20 />
        </Button>
      </Modal>
    )

    return (
      <div>
        <BannerContainer
          title="Trading Channel Protocol"
          content="Trading Channel Creation Window"
          buttonLabel="Create Trading Channel"
          buttonAction={this.showModal}
          noBgImage
        />
        {tradingSignUpModal}
      </div>
    )
  }
}

export default TradingSignUpContainer
