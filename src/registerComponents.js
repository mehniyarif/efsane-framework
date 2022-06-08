import Accordion from "@/components/efsane-accordion";
import Button from "@/components/efsane-button";
import ButtonGroup from "@/components/efsane-button-group";
import Card from "@/components/efsane-card";
import Checkbox from "@/components/efsane-checkbox";
import ColorPicker from "@/components/efsane-color-picker";
import Datepicker from "@/components/efsane-datepicker";
import DatetimePicker from "@/components/efsane-datetime-picker";
import Dialog from "@/components/efsane-dialog";
import DocumentUpload from "@/components/efsane-document-upload";
import Fieldset from "@/components/efsane-fieldset";
import Footer from "@/components/efsane-footer";
import Form from "@/components/efsane-form";
import ImageUpload from "@/components/efsane-image-upload";
import Input from "@/components/efsane-input";
import Modal from "@/components/efsane-modal";
import Navbar from "@/components/efsane-navbar";
import Notification from "@/components/efsane-notification";
import ProgressBar from "@/components/efsane-progress-bar";
import Radio from "@/components/efsane-radio";
import Range from "@/components/efsane-range";
import Select from "@/components/efsane-select";
import SelectSearch from "@/components/efsane-select-search";
import Sidebar from "@/components/efsane-sidebar";
import Spinner from "@/components/efsane-spinner";
import Switch from "@/components/efsane-switch";
import Table from "@/components/efsane-table";
import Tabs from "@/components/efsane-tabs";
import TextArea from "@/components/efsane-text-area";
import Layout from "@/components/efsane-layout";
export const registerComponents = {
  install(app) {
    app.component("efsane-accordion-local", Accordion);
    app.component("efsane-button-local", Button);
    app.component("efsane-button-group-local", ButtonGroup);
    app.component("efsane-card-local", Card);
    app.component("efsane-checkbox-local", Checkbox);
    app.component("efsane-color-picker-local", ColorPicker);
    app.component("efsane-datepicker-local", Datepicker);
    app.component("efsane-datetime-picker-local", DatetimePicker);
    app.component("efsane-dialog-local", Dialog);
    app.component("efsane-document-upload-local", DocumentUpload);
    app.component("efsane-fieldset-local", Fieldset);
    app.component("efsane-footer-local", Footer);
    app.component("efsane-form-local", Form);
    app.component("efsane-image-upload-local", ImageUpload);
    app.component("efsane-input-local", Input);
    app.component("efsane-modal-local", Modal);
    app.component("efsane-navbar-local", Navbar);
    app.component("efsane-notification-local", Notification);
    app.component("efsane-progress-bar-local", ProgressBar);
    app.component("efsane-radio-local", Radio);
    app.component("efsane-range-local", Range);
    app.component("efsane-select-local", Select);
    app.component("efsane-select-search-local", SelectSearch);
    app.component("efsane-sidebar-local", Sidebar);
    app.component("efsane-spinner-local", Spinner);
    app.component("efsane-switch-local", Switch);
    app.component("efsane-table-local", Table);
    app.component("efsane-tabs-local", Tabs);
    app.component("efsane-text-area-local", TextArea);
    app.component("efsane-layout-local", Layout);
  },
};
