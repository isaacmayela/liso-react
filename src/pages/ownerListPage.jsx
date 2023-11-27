import SidebarMenu from '../components/sidebar-menu/sidebar';
import MainContainer from '../components/main-container/mainContainer'
import ElementsContainer from '../components/elements-container/elementsContainer';
import OwnerContainer from '../components/owners-container/ownerContainer';
import Banner from '../components/banner/banner';


export default function OwnerListPage({itemList}) {

    return (
        <>
           <SidebarMenu/>
            <MainContainer>
              <ElementsContainer>
                <Banner/>
                <div></div>
                <OwnerContainer />
              </ElementsContainer>
            </MainContainer>
        </>
    );
}