import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import ListTripsPage from "./pages/ListTripsPage"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"



function Router(){
    return(
        
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path="ListTrips" element={<ListTripsPage/>}/>
            <Route path="ApplicationForm" element={<ApplicationFormPage/>}/>
            <Route path="AdminHome" element={<AdminHomePage/>}/>
            <Route path="CreateTrip" element={<CreateTripPage/>}/>
            <Route path="Login" element={<LoginPage/>}/>
            <Route path="TripDetails" element={<TripDetailsPage/>}/>

          </Routes>
        </BrowserRouter>
    )
}

export default Router