import page from "../node_modules/page/page.mjs";
import { changeNav, renderTemplate } from "./middlewares/renderMiddleware.js";
import { renderBrowseView } from "./views/browseView.js";
import { renderHome } from "./views/homeView.js";
import { renderMyTeams } from "./views/myTeamsView.js";
import { renderLogin } from "./views/loginView.js";
import { renderRegister } from "./views/registerView.js";
import { renderCreate } from "./views/createView.js";
import { renderDetails } from "./views/detailsView.js";

page(renderTemplate);

page('/', renderHome);
page('/browse-teams', renderBrowseView);
page('/my-teams', renderMyTeams);
page('/login', renderLogin);
page('/register', renderRegister);
page('/create', renderCreate);
page('/details', renderDetails)
// page('/logout');

page.start();
// changeNav();