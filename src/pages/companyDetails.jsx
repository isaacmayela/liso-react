import SidebarMenu from '../components/sidebar-menu/sidebar'
import MainContainer from '../components/main-container/mainContainer'
import ElementsContainer from '../components/elements-container/elementsContainer';
import DetailsContainer from '../components/company-details-container/companyDetailsContainer';


export default function CompanyDetailsPage() {

    return (
        <>
           <SidebarMenu/>
            <MainContainer>
              <ElementsContainer>
                <DetailsContainer/>
              </ElementsContainer>
            </MainContainer>
        </>
    );
}