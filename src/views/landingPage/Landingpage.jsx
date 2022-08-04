import React from 'react';
import AppNavbar from '../../components/navbar/AppNavbar';
import styled from "styled-components";
import Footer from '../../components/footer/Footer';
import './Landingpage.css';
import BackgroundImage from '../../assets/Group1.png';
import Landing from '../../assets/landin.png';
import Path from '../../assets/Path.svg';
import GroupWrap from '../../assets/Rectangle1.svg';
import GroupWrap2 from '../../assets/Rectangle2.svg';
import RectangleImg1 from '../../assets/rect1.png';
import RectangleImg2 from '../../assets/Rectangle3.png';
import RectangleImg3 from '../../assets/rectangle03.png';
import Tabs from '../../components/tabs/Tabs';
import TabContent from '../../components/tabsContent/TabContent';


const Container = styled.div`
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
`;
const BackgroundImg = styled.div`
    background-image:url(${BackgroundImage});
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding-left: 155px;
    padding-right:90px;
    padding-top: 60px;
    padding-bottom: 60px;

    @media (max-width: 768px) {
        display: block;
        width:100%;
    }
`;
const LandingPageContent = styled.div`
   color:#fff;
`;
const Text = styled.div`
     font-size:55px;
     margin-top:80px;

`;
const Content = styled.div`
    font-size:26px;
    margin-top:19px;

`;
const Button = styled.button`
    width: 205px;
    height: 65px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 20px #0000001A;
    border-radius: 5px;
    opacity: 1;
    margin-top:45px;
    border:none;
    color:#3460FC;
    font-size:20px;
    cursor:pointer;


`;
const Groups = styled.div`
    background-image:url(${Path});
    height: auto;
    margin-top:85px;
    width:100%;
`;
const GroupText = styled.div`
    font-size:55px;
    padding-top:155px;
`;
const GroupContent = styled.div`
    font-size:22px;
    margin-top:29px;
    width:509px;
`;
const GroupImgWrap = styled.div`
    background-image:url(${GroupWrap});
    background-size : cover;

`;
const GroupImgWrap2 = styled.div`
    background-image:url(${GroupWrap2});
    background-size : cover;
`;

const RectangleImage1 = styled.img`
    width: 341px;
    height: auto;
    padding-top: 71px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
`;
const RectangleImage2 = styled.img`
    height: auto;
    margin-top: 0;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 450px;
`;
const RectangleImage3 = styled.img`
    width: 341px;
    height: auto;
    padding-top: 71px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
`;
const GroupImgWrapText = styled.div`
   text-align:center;
   font-weight:600;
   font-size:34px;
   margin-top:45px;
`;
const GroupImgWrapContent = styled.div`
   text-align:center;
   font-size:20px;
   padding-left:70px;
   padding-right:70px;
   margin-top:18px;
   padding-bottom: 95px;

`;
const GroupWholeWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding-left: 155px;
    padding-right:155px;
    padding-bottom: 60px;

    @media (max-width: 768px) {
        display: block;
    }
`;

const ProjectStage = styled.div`
  text-align:center;
  padding-left:55px;
  padding-right:55px;
`;
const ProjectText = styled.div`
  font-size:43px;
  margin-top:70px;

`;
const ProjectContent = styled.div`
  font-size:22px;
  margin-left:55px;
  margin-top:19px;
  margin-bottom:60px;
`;
const TabWrapper = styled.div`
  margin-left:150px;
  margin-right:150px;
`;
function Landingpage() {
    return (
        <Container>
            <AppNavbar />
            <BackgroundImg>
                <LandingPageContent>
                    <Text>To Bridge Gaps Between Your <b>Remote Hiring & Development Solutions</b>
                    </Text>
                    <Content>Hire remote Team in Tech & design </Content>
                    <Button>Hire Now</Button>
                </LandingPageContent>
                <div>
                    <img src={Landing} alt="/" width="595px" />
                </div>
            </BackgroundImg>
            <Groups>
                <GroupWholeWrap>
                    <div>
                        <GroupText>Multifaceted Remote<br /><b>Digital Teams</b></GroupText>
                        <GroupContent>Progress every technological product developments Quicker, Faster & Effective
                        </GroupContent>
                        <GroupImgWrap>
                            <RectangleImage1 src={RectangleImg1} />
                            <GroupImgWrapText>Instant Teams</GroupImgWrapText>
                            <GroupImgWrapContent>You can tell us your requirements and pick the right developers from our team and form a dedicated team for your project.</GroupImgWrapContent>
                        </GroupImgWrap>
                    </div>
                    <div>
                        <GroupImgWrap2>
                            <RectangleImage2 src={RectangleImg2} />
                            <GroupImgWrapText>Product Engineering</GroupImgWrapText>
                            <GroupImgWrapContent>Hire experienced MVP development teams ready to jump on board and start building your product.</GroupImgWrapContent>
                        </GroupImgWrap2>
                        <GroupImgWrap2>
                            <RectangleImage3 src={RectangleImg3} />
                            <GroupImgWrapText>Multiple Teams</GroupImgWrapText>
                            <GroupImgWrapContent>We help you build a tech team from scratch or extend your current team with motivated and skilled remote developers.</GroupImgWrapContent>
                        </GroupImgWrap2>

                    </div>
                </GroupWholeWrap>
            </Groups>
            <ProjectStage>
                <ProjectText><b>Proficient Remote Teams</b> For Every Stages of Your Project</ProjectText>
                <ProjectContent>
                    Transform your developmental operations more agile and continuous with our remote team
                </ProjectContent>

            </ProjectStage>
            <TabWrapper>
                <Tabs
                    activeTab={0}
                    tabsList={[
                        {
                            label: 'First',
                            content: <TabContent />,
                        },
                        {
                            label: 'Second',
                            content: <TabContent />,
                        },
                        {
                            label: 'Third',
                            content: <TabContent />,
                        },
                        {
                            label: 'Fourth',
                            content: <TabContent />,
                        },
                        {
                            label: 'Fifth',
                            content: <TabContent />,
                        },
                        {
                            label: 'Sixth',
                            content: <TabContent />,
                        },
                        {
                            label: 'Seventh',
                            content: <TabContent />,
                        },
                    ]}
                />
            </TabWrapper>
            <Footer />
        </Container >
    );
}

export default Landingpage;