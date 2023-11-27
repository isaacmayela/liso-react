import SidebarMenu from '../components/sidebar-menu/sidebar';
import MainContainer from '../components/main-container/mainContainer';
import ElementsContainer from '../components/elements-container/elementsContainer';
import ProviderContainer from '../components/providers-container/providerContainer';
import Banner from '../components/banner/banner';

export default function ProviderListPage({itemList}) {

    return (
        <>
           <SidebarMenu/>
            <MainContainer>
              <ElementsContainer>
                <Banner/>
                <div></div>
                <ProviderContainer />
              </ElementsContainer>
            </MainContainer>
        </>
    );
}