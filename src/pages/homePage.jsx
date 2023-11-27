import SidebarMenu from '../components/sidebar-menu/sidebar'
import MainContainer from '../components/main-container/mainContainer'
import ElementsContainer from '../components/elements-container/elementsContainer';
import AskContainer from '../components/ask-container/askContainer';
import Informations from '../components/informations/informations';
import Banner from '../components/banner/banner';


export default function HomePage() {

    return (
        <>
           <SidebarMenu/>
            <MainContainer>
              <ElementsContainer>
                <Banner/>
                <Informations />
                <AskContainer />
              </ElementsContainer>
            </MainContainer>
        </>
    );
}