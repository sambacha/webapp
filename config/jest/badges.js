// badges given can be redeemed for rebates/credits on services
const config = {
    badges: {
        EDI: {
            label: `EDI`,
            acclaimTemplate: `f58d2b58-8c0e-4a18-ae92-89bd978a7d07`,
            githubRepo: `freight-trust/truenft-edi-badges`,
        },
        AS2: {
            label: `AS2`,
            acclaimTemplate: `9995af49-23f1-4ef1-bec7-4778f654ea75`,
            githubRepo: `freight-trust/truenft-demo`,
        },
        Customs: {
            label: `Customs`,
            acclaimTemplate: `8d740300-9256-40d2-9a1c-c237d1138d86`,
            githubRepo: `freight-trust/customs-demo`,
        },
    },
    questions: {
        questionHowDescribe: `How would you describe the service in one or more words?`,
        questionLikeBest: `What did you like best about the service?`,
        questionHowImprove: `How can we improve the service?`,
        questionSuggestion: `Anything you'd like help with going forward? Future service features?`,
        questionFreeform: `Anything else you'd like to share with the engineering team?`,
    },
};

export default config;
