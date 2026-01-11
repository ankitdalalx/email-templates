import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Font,
} from "@react-email/components";
import * as React from "react";

// CDN URLs for assets
const logoUrl = "https://cms-resources.pocketful.in/blog/wp-content/uploads/2026/01/email-pocketful-logo.png";
const footerUrl = "https://cms-resources.pocketful.in/blog/wp-content/uploads/2026/01/email-footer-pocketful.png";
const redFlagUrl = "https://cms-resources.pocketful.in/blog/wp-content/uploads/2026/01/red-flag.png";
const ctaLink = "https://app.pocketful.in/?deep_source=true&ref=AN0012&c=HkVaJj";

export const PocketfulEmail = () => (
    <Html>
        <Head>
            <Font
                fontFamily="Plus Jakarta Sans"
                fallbackFontFamily="Helvetica"
                webFont={{
                    url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4Ko20w.woff2",
                    format: "woff2",
                }}
                fontWeight={800}
                fontStyle="normal"
            />
            <style>
                {`
          @media only screen and (max-width: 480px) {
            .hero-text {
              font-size: 18px !important;
              line-height: 26px !important;
            }
            .sub-text {
              font-size: 13px !important;
              line-height: 20px !important;
            }
            .cost-text {
              font-size: 13px !important;
              line-height: 20px !important;
            }
            .section-title {
              font-size: 13px !important;
            }
            .question-bubble {
              font-size: 11px !important;
              padding: 6px 12px !important;
            }
            .answer-text {
              font-size: 13px !important;
            }
            .benefit-pill {
              font-size: 11px !important;
              padding: 6px 10px !important;
            }
            .key-message {
              font-size: 13px !important;
            }
            .cta-button {
              font-size: 14px !important;
              padding: 12px 20px !important;
            }
            .closing-text {
              font-size: 12px !important;
            }
            .tagline-hash {
              font-size: 36px !important;
            }
            .tagline-text {
              font-size: 12px !important;
              line-height: 14px !important;
            }
            .content-section {
              padding: 24px 16px !important;
            }
            .header-section {
              padding: 16px !important;
            }
          }
        `}
            </style>
        </Head>
        <Preview>Where Traders Trade - Switch to Zero Brokerage</Preview>
        <Body style={main}>
            <Container style={container}>
                {/* Header Section */}
                <Section style={headerSection} className="header-section">
                    <Row>
                        <Column style={{ width: "50%" }}>
                            <Img
                                src={logoUrl}
                                width="180"
                                height="55"
                                alt="Pocketful Logo"
                                style={logo}
                            />
                        </Column>
                        <Column style={{ width: "4px", verticalAlign: "middle" }}>
                            <div style={headerDivider}></div>
                        </Column>
                        <Column style={{ width: "50%", textAlign: "right" as const }}>
                            <Text style={taglineContainer}>
                                <span style={taglineHash} className="tagline-hash">#</span>
                                <span style={taglineText} className="tagline-text">Where<br />Traders<br />Trade</span>
                            </Text>
                        </Column>
                    </Row>
                </Section>

                {/* Yellow Bar */}
                <Section style={yellowBar}></Section>

                {/* Content Section */}
                <Section style={contentSection} className="content-section">
                    {/* Hero Text */}
                    <Text style={heroText} className="hero-text">
                        You're not a casual trader,<br />
                        and your <strong>brokerage bill proves it.</strong>
                    </Text>

                    {/* Cost Section */}
                    <Text style={subText} className="sub-text">
                        Traders who place multiple orders a day end up paying
                    </Text>
                    <Text style={costText} className="cost-text">
                        <strong>₹30,000–₹1,20,000</strong>{" "}
                        <Img
                            src={redFlagUrl}
                            width="18"
                            height="18"
                            alt="flag"
                            style={flagIcon}
                        />{" "}
                        a year just to participate in the market.
                    </Text>

                    <Hr style={hr} />

                    {/* Questions Section */}
                    <Text style={sectionTitle} className="section-title">If you've ever wondered:</Text>

                    <Section style={questionSection}>
                        <Row style={questionRow}>
                            <Column style={questionNumberCol}>
                                <Text style={questionNumber}>💭</Text>
                            </Column>
                            <Column>
                                <Text style={questionBubble} className="question-bubble">
                                    Why am I profitable but my a/c balance looks flat?
                                </Text>
                            </Column>
                        </Row>
                        <Row style={questionRow}>
                            <Column style={questionNumberCol}>
                                <Text style={questionNumber}>💭</Text>
                            </Column>
                            <Column>
                                <Text style={questionBubble} className="question-bubble">
                                    Where did my execution gains vanish?
                                </Text>
                            </Column>
                        </Row>
                        <Row style={questionRow}>
                            <Column style={questionNumberCol}>
                                <Text style={questionNumber}>💭</Text>
                            </Column>
                            <Column>
                                <Text style={questionBubble} className="question-bubble">
                                    Why am I down despite winning days?
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    <Text style={answerText} className="answer-text">
                        The answer is usually <strong>hidden fees.</strong>
                    </Text>

                    <Hr style={hr} />

                    {/* Benefits Section */}
                    <Text style={sectionTitle} className="section-title">With Pocketful:</Text>

                    <Section style={benefitsSection}>
                        <Row>
                            <Column>
                                <Text style={benefitPill} className="benefit-pill">
                                    <span style={starIcon}>★</span> ₹0 brokerage on every trade
                                </Text>
                            </Column>
                            <Column>
                                <Text style={benefitPill} className="benefit-pill">
                                    <span style={starIcon}>★</span> No limits, no fine print
                                </Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={benefitPill} className="benefit-pill">
                                    <span style={starIcon}>★</span> You keep every rupee you earn with us
                                </Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Key Message */}
                    <Text style={keyMessage} className="key-message">
                        For active traders like you, that's not a perk;<br />
                        <strong>That's a compounding edge.</strong>
                    </Text>

                    {/* CTA Button */}
                    <Section style={ctaSection}>
                        <Button style={ctaButton} className="cta-button" href={ctaLink}>
                            👉 Switch to <span style={ctaYellow}>Zero Brokerage</span>
                        </Button>
                    </Section>

                    {/* Closing */}
                    <Text style={closingText} className="closing-text">
                        Because every trade should build your account, not drain it through fees.
                    </Text>
                    <Text style={signature}>- Team Pocketful</Text>
                </Section>

                {/* Footer Image */}
                <Section style={footerSection}>
                    <Link href={ctaLink}>
                        <Img
                            src={footerUrl}
                            width="100%"
                            alt="Pocketful Footer"
                            style={{ display: "block", width: "100%" }}
                        />
                    </Link>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default PocketfulEmail;

// Styles
const main = {
    backgroundColor: "#f4f4f4",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
};

const container = {
    margin: "0 auto",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
};

const headerSection = {
    backgroundColor: "#5300F4",
    padding: "20px 24px",
};

const logo = {
    display: "block",
};

const headerDivider = {
    width: "1px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: "0 auto",
};

const taglineContainer = {
    margin: "0",
    textAlign: "right" as const,
};

const taglineHash = {
    color: "#FFDA00",
    fontSize: "48px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    lineHeight: "1",
    verticalAlign: "top",
};

const taglineText = {
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontStyle: "italic",
    fontWeight: 800,
    lineHeight: "18px",
    display: "inline-block",
    textAlign: "left" as const,
    marginLeft: "8px",
    verticalAlign: "top",
};

const yellowBar = {
    backgroundColor: "#FFDA00",
    height: "6px",
};

const contentSection = {
    padding: "32px 24px",
};

const heroText = {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#000000",
    margin: "0 0 24px 0",
};

const subText = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#000000",
    margin: "0 0 8px 0",
};

const costText = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#000000",
    margin: "0 0 24px 0",
};

const flagIcon = {
    display: "inline",
    verticalAlign: "middle",
};

const hr = {
    borderColor: "#e0e0e0",
    margin: "24px 0",
};

const sectionTitle = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#000000",
    margin: "0 0 16px 0",
};

const questionSection = {
    marginBottom: "24px",
};

const questionRow = {
    marginBottom: "10px",
};

const questionNumberCol = {
    width: "36px",
    verticalAlign: "middle",
};

const questionNumber = {
    fontSize: "20px",
    margin: "0",
    lineHeight: "1",
};

const questionBubble = {
    backgroundColor: "#E8E8E8",
    borderRadius: "20px",
    padding: "8px 16px",
    fontSize: "13px",
    color: "#000000",
    margin: "0",
    display: "inline-block",
};

const answerText = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#000000",
    margin: "0 0 24px 0",
};

const benefitsSection = {
    marginBottom: "24px",
};

const benefitPill = {
    border: "1px solid #000000",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "13px",
    color: "#000000",
    margin: "0 8px 8px 0",
    display: "inline-block",
};

const starIcon = {
    color: "#5300F4",
    marginRight: "6px",
};

const keyMessage = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#000000",
    margin: "0 0 24px 0",
};

const ctaSection = {
    marginBottom: "24px",
};

const ctaButton = {
    backgroundColor: "#5300F4",
    borderRadius: "8px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 600,
    padding: "14px 24px",
    textDecoration: "none",
    display: "inline-block",
};

const ctaYellow = {
    color: "#FFDA00",
};

const closingText = {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#000000",
    margin: "0 0 16px 0",
};

const signature = {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#000000",
    margin: "0",
};

const footerSection = {
    backgroundColor: "#5300F4",
};
