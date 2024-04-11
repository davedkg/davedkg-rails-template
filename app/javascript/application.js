import * as bootstrap from "bootstrap";
import Rails from "@rails/ujs";

import "@hotwired/turbo-rails";
import "./modernize/sidebarmenu";
import "./modernize/sidebar";
import "./lib/confirm";
import "./lib/toast";
import "./controllers";

Rails.start();


