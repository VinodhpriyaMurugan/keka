function khSetStyles() {
  var stylesTag = document.createElement("style");
  var styles = `
    @import url('https://cdn.kekastatic.net/shared/icons/1.0.16/keka-icons.css');
    @import url('https://cdn.kekastatic.net/shared/fonts/proximanova/proximanova.css');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
    
    .kh-main-container {
      --font-size: 13px;
      font-family: "Proxima Nova";
    }
    
    .kh-main-container a {
      text-decoration: none;
    }

    .kh-main-container h1 {
      font-size: calc(var(--font-size) * 1.846);
      /* 24px*/
      line-height: calc(var(--font-size) * 2.538);
    }
    
    .kh-main-container h2 {
      font-size: calc(var(--font-size) * 1.538);
      /* 20px*/
      line-height: calc(var(--font-size) * 2.077);
      margin-top: 0px !important;
      margin-bottom: 10px !important;
    }
    
    .kh-main-container h3 {
      font-size: calc(var(--font-size) * 1.385);
      /*  18px*/
      line-height: calc(var(--font-size) * 1.923);
      margin: 0px !important;
    }
    
    .kh-main-container *,
    .kh-main-container *::before,
    .kh-main-container *::after {
      box-sizing: border-box;
    }
    
    .kh-bg-slate-900 {
      background: #999999;
    }
    
    .kh-dot {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .kh-dot.kh-dot-xs {
      width: 4px;
      height: 4px;
    }
    
    .kh-job-card {
      border-radius: 10px;
      border: 1px solid #e9ecef;
      cursor: pointer;
    }
    
    .kh-job-card .kh-job-title:hover {
      color: rgba(var(--theme-color), 1) !important;
    }
    
    .kh-job-card:hover {
      text-decoration: none !important;
      color: unset;
    }
    
    .kh-card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: calc(var(--font-size) * 0.50);
    }
    
    .kh-card-body{
      flex: 1 1 auto;
      padding: calc(var(--font-size) * 1.25);
    }
    
    .kh-font-32 {
      font-size: 32px;
      line-height: 39px;
    }
    
    .kh-font-large {
      font-size: calc(var(--font-size) * 1.077);
      /* 14px*/
      line-height: calc(var(--font-size) * 1.462);
    }
    
    .kh-text-capitalize {
      text-transform: capitalize!important;
    }
    
    .kh-font-normal {
      font-size: var(--font-size);
      /*  13px;*/
    }
    
    .kh-font-small {
      font-size: calc(var(--font-size) * 0.9231);
      /*12px;*/
      line-height: calc(var(--font-size) * 1.231);
    }
    
    .kh-font-x-small {
      font-size: calc(var(--font-size) * 0.8462);
      /* 11px;*/
      line-height: calc(var(--font-size) * 1.154);
    }

    .kh-mb-0 {
      margin-bottom: 0 !important;
    }

    .kh-mb-16 {
      margin-bottom: 16px !important;
    }
    
    .kh-mb-20 {
      margin-bottom: 20px !important;
    }
    
    .kh-mb-10 {
      margin-bottom: 10px !important;
    }

    .kh-mb-1 {
      margin-bottom: calc(var(--font-size) * 0.25) !important;
    }
    
    .kh-mb-3 {
      margin-bottom: calc(var(--font-size) * 1) !important;
    }
    
    .kh-mb-4 {
      margin-bottom: calc(var(--font-size) * 1.5) !important;
    }

    .kh-mb-4 {
      margin-bottom: calc(var(--font-size) * 3) !important;
    }

    .kh-mt-0 {
      margin-top: 0 !important;
    }
    
    .kh-mt-20 {
      margin-top: 20px !important;
    }
    
    .kh-mr-15 {
      margin-right: 15px !important;
    }
    
    .kh-mr-3 {
      margin-right: calc(var(--font-size) * 1) !important;
    }
    
    .kh-ml-1 {
      margin-left: calc(var(--font-size) * 0.25) !important;
    }
    
    .kh-clear-magin {
      margin: 0px !important;
    }

    .kh-py-3 {
      padding-top: calc(var(--font-size) * 1) !important ;
      padding-bottom: calc(var(--font-size) * 1) !important;
    }

    .kh-px-1 {
        padding-left: calc(var(--font-size) * 0.25) !important;
        padding-right: calc(var(--font-size) * 0.25) !important;
    }
    
    .kh-col-default-4 .card {
      margin-right: 30px;
      height: 160px;
    }
    
    .kh-col-default-4 a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.125);
    }
    
    .kh-text-link {
      color: rgba(var(--theme-color), 1) !important;
    }
    
    .kh-position-relative {
      position: relative;
    }
    
    .kh-position-absolute {
      position: absolute;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter {
      position: relative;
      border-radius: 3px;
      cursor: pointer;
      height: 40px;
      margin-bottom: 10px;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter .label,
    .kh-hiro-job-filters .kh-hiro-filter span,
    .kh-hiro-job-filters .kh-hiro-filter .icon {
      z-index: 0;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
      color: #a2a9b4;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter select {
      -webkit-appearance: none;
      -moz-appearance: none; /* Firefox */
      cursor: pointer;
      height: 40px !important;
      outline: none;
      padding-right: 24px;
    }

    .kh-form-control {
      font-family: inherit;
    }

    .kh-hiro-job-filters .kh-hiro-filter select:focus {
      box-shadow: none;
      border-color: #ced4da;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter select option {
      padding: 8px 12px;
      font-size: 16px;
      color: #222;
    }
    
    .kh-hiro-job-filters .kh-hiro-filter select:invalid {
      color: #777 !important;
    }
    
    .kh-hiro-job-filters .kh-hiro-search {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .kh-hiro-job-filters .kh-hiro-search .ki-search {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      display: flex;
      font-size: 18px;
      align-items: center;
      margin-left: 24px;
      margin-top: auto;
      margin-bottom: auto;
      color: #a2a9b4;
    }
    
    .kh-hiro-job-filters .kh-hiro-search input {
      height: 40px !important;
      background: transparent;
      border-radius: 3px;
      transition: 0.3s linear;
      outline: none;
      position: relative;
      padding-left: 32px !important;
      border: 1px solid #d8dde6 !important;
    }
    
    .kh-hiro-job-filters .kh-hiro-search input,
    .kh-hiro-job-filters .kh-hiro-search input:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
    
    .kh-text-truncate-1,
    .kh-text-truncate-2 {
      display: -webkit-box;
      overflow: hidden;
      white-space: initial !important;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
    }
    
    .kh-text-truncate-1 {
      -webkit-line-clamp: 1;
    }
    
    .kh-text-truncate-2 {
      -webkit-line-clamp: 2;
    }
    
    .kh-text-dark {
      color: #343a40!important;
    }
    
    .kh-min-height-100-73 {
      min-height: calc(100vh - 73px);
    }
    
    .kh-min-height-100-102 {
      min-height: calc(100vh - 102px);
    }
    
    .kh-footer .kh-footer-content {
      border-top: 1px solid #dee2e6;
    }
    
    .kh-company-social-links a {
      font-size: 18px;
      color: #d9d9d9 !important;
      transition: 0.3s linear;
    }
    
    .ki-linkedin-square:hover {
      color: #0966c3;
      cursor: pointer;
    }
    
    .ki-twitter:hover {
      color: #1da1f2;
      cursor: pointer;
    }
    
    .ki-instagram-fill:hover {
      color: #c4285e;
      cursor: pointer;
    }
    
    .ki-youtube-fill:hover {
      color: #ff0000;
      cursor: pointer;
    }

    .kh-icon {
        height: 24px;
        width: 24px;
        font-size: 20px;
        line-height: 28px !important;
        font-weight: 400 !important;
        color: #A2A9B4;
    }

    .kh-icon-sm {
        height: 20px;
        width: 20px;
        font-size: 16px !important;
        line-height: 28px !important;
        font-weight: 400 !important;
    }

    .kh-icon-lg {
        height: 28px;
        width: 28px;
        font-size: 24px !important;
        line-height: 28px !important;
        font-weight: 300 !important;
    }
    
    .kh-row {
      display: flex;
      flex-wrap: wrap;
      margin-left: 0;
      margin-right: 0;
    }
    
    .kh-cursor-pointer {
      cursor: pointer;
    }
    
    .kh-d-flex {
      display: flex !important;
    }
    
    .kh-flex-column {
      flex-direction: column !important;
    }
    
    .kh-flex-wrap {
      flex-wrap: wrap !important;
    }
    
    .kh-justify-content-center {
      justify-content: center !important;
    }

    .kh-justify-content-between {
      justify-content: space-between !important;
    }
    
    .kh-align-items-center {
      align-items: center !important;
    }
    
    .kh-align-items-baseline {
      align-items: baseline !important;
    }
    
    .kh-d-none {
        display: none !important;
    }

    .kh-container-fluid {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
    
    .kh-text-center {
      text-align: center !important;
    }
    
    .kh-text-secondary {
      color: #6c757d!important;
    }
    
    .kh-w-100 {
      width: 100% !important;
    }
    
    .kh-align-middle {
      vertical-align: middle!important;
    }
    
    .kh-pr-2, .kh-px-2 {
      padding-right: calc(var(--font-size) * 0.5)!important;
    }
    
    .kh-mt-1 {
      margin-top: calc(var(--font-size) * 0.25) !important;
    }
    
    .kh-form-control {
      display: block;
      width: 100%;
      font-weight: 400;
      background-color: #fff;
      color: #495057;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    .kh-input-search input {
        height: 40px !important;
        background: transparent;
        border-radius: 3px;
        padding-left: 32px;
        transition: 0.3s linear;
        outline: none;
        border: 1px solid #D8DDE6 !important;
    }

    .kh-form-control-lg {
      padding: calc(var(--font-size) * 0.5) calc(var(--font-size) * 1);
      font-size: calc(var(--font-size) * 1.25);
      line-height: 1.5;
      border-radius: calc(var(--font-size) * 0.3);
    }
    
    .kh-align-self-center{
      align-self: center !important;
    }
    
    .kh-font-weight-bold {
      font-weight: 700!important;
    }

    @media (min-width: 576px) {
      .kh-col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .kh-col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    
    @media (min-width: 992px) {
        .kh-col-lg {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
        }
    
        .kh-col-lg-2 {
          flex: 0 0 16.666667%;
          max-width: 16.666667%;
        }

        .kh-pl-lg-3 {
            padding-left: calc(var(--font-size) * 1) !important;
        }

        .kh-pr-lg-3 {
            padding-right: calc(var(--font-size) * 1) !important;
        }

        .kh-col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .kh-col-lg-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
    
    .kh-mx-2 {
      margin-right: calc(var(--font-size) * 0.5) !important;
      margin-left: calc(var(--font-size) * 0.5) !important;
    }
    
    .kh-mr-1 {
      margin-right: calc(var(--font-size) * 0.25) !important;
    }
    
    .kh-mx-1 {
      margin-right: calc(var(--font-size) *  0.25) !important;
      margin-left: calc(var(--font-size) * 0.25), !important;
    }
    
    .kh-mx-4 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }
    
    .kh-px-3 {
      padding-left: calc(var(--font-size) * 1) !important;
      padding-right: calc(var(--font-size) * 1) !important;
    }

    .kh-my-2 {
      margin-top: calc(var(--font-size) * 0.5) !important;
      margin-bottom: calc(var(--font-size) * 0.5) !important;
    }

    .kh-mt-3 {
      margin-top: calc(var(--font-size) * 1) !important;
    }
    
    .kh-mt-4 {
      margin-top: calc(var(--font-size) * 1.5) !important;
    }
    
    .kh-alert {
      position: relative;
      padding: calc(var(--font-size) * 0.75) calc(var(--font-size) * 1.25);
      margin-bottom: calc(var(--font-size) * 1);
      border: 1px solid transparent;
      border-radius: calc(var(--font-size) * 0.25);
    }
    
    .kh-alert-info {
      color: #0c5460;
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }

    .kh-font-weight-600 {
        font-weight: 600 !important;
    }

    .kh-border-pill {
        border-radius: 20px;
        border: 1px solid #101828 !important;
    }

    .kh-text-small {
        font-size: 12px;
        line-height: 18px;
    }

    .kh-job-container:hover .kh-job-title, .kh-job-container:hover .kh-icon {
        color: rgba(var(--theme-color), 1) !important;
    }

    .kh-job-container .kh-icon.ki-circle-arrow-right-fill {
        display: none !important;
    }

    .kh-job-container:hover .kh-icon.ki-circle-arrow-right-fill {
        display: block !important;
    }

    .kh-job-container:hover.kh-job-card {
        border-color: rgba(var(--theme-color), 1) !important;
    }

    .kh-rotate-315 {
        transform: rotate(315deg);
    }

    @media (min-width: 768px) {
        .kh-pl-md-8 {
            padding-left: 8px !important;
        }

        .kh-pr-md-8 {
            padding-right: 8px !important;
        }

        .kh-col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .kh-d-md-none {
            display: none !important;
        }

        .kh-d-md-block {
            display: block !important;
        }
    }

    .kh-overflow-x-hidden {
        overflow-x: hidden;
    }

    .kh-no-gutters {
        margin-right: 0;
        margin-left: 0;
    }

    .kh-no-gutters > [class*=kh-col-] {
        padding-right: 0;
        padding-left: 0;
    }

    .kh-badge {
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
    }

    .kh-badge-pill {
        border-radius: calc(var(--font-size) * 10);
    }

    .kh-bg-secondary {
        background: #EAECF0 !important;
    }

    .kh-font-weight-normal {
        font-weight: 400 !important;
    }

    .kh-py-1 {
        padding-top: calc(var(--font-size) * 0.25) !important;
        padding-bottom: calc(var(--font-size) * 0.25) !important;
    }

    .kh-mr-2, .kh-main-container h3.kh-mr-2 {
        margin-right: calc(var(--font-size) * 0.5) !important;
    }

    .kh-ml-2 {
        margin-left: calc(var(--font-size) * 0.5) !important;
    }

    .kh-ml-4 {
        margin-left: calc(var(--font-size) * 1.5) !important;
    }

    .kh-ml-8 {
        margin-left: 8px !important;
    }

    .kh-pl-2 {
        padding-left: calc(var(--font-size) * 0.5) !important;
    }

    .kh-h-100 {
        height: 100% !important;
    }

    .kh-list-unstyled {
        padding-left: 0;
        list-style: none;
        margin-top: 0;
    }
    [class*=" ki-"]::before {
        line-height: inherit;
        vertical-align: inherit;
    }
    .kh-accordion-title + .kh-accordion-content {
        display: none;
    }

    .kh-accordion-title.kh-is-open + .kh-accordion-content {
        display: block;
    }

    .kh-accordion-title.kh-is-open .ki-arrow-dropdown::before {
        content: '\\F374';
    }   

    .kh-form-check {
        position: relative;
        display: block;
        margin-bottom: calc(var(--font-size) * 0.5);
    }

    input[type=checkbox] {
        box-sizing: border-box;
        padding: 0;
    }


    .kh-form-check-input {
        position: absolute;
        margin-top: 0.25rem;
        margin-left: -1rem;
    }
  `;
  stylesTag.textContent = styles;
  document.head.appendChild(stylesTag);
}

function khGetTargetContainer() {
  var dt = document.querySelector(khConfig.targetContainer);
  return dt;
}

// creating embededJob container Container Element
function khSetJobFilterContainer() {
  var mainContainer = document.createElement("div");
  mainContainer.id = "kh-main-container";
  mainContainer.classList.add("kh-main-container");
  khGetTargetContainer().appendChild(mainContainer);

  var embedJobContainer = document.createElement("div");
  embedJobContainer.id = "kh-embed-job-container";
  embedJobContainer.classList.add("kh-row", "kh-no-gutters");
  mainContainer.appendChild(embedJobContainer);

  var embedJobsFilters = document.createElement("div");
  embedJobsFilters.id = "kh-embed-jobs-filters";
  embedJobsFilters.classList.add(
    "kh-col-lg-3",
    "kh-col-sm-12",
    "kh-pr-lg-3",
    "kh-mb-4"
  );
  embedJobContainer.appendChild(embedJobsFilters);
}

function khSetJobWidgetContainer() {
  var jobWidget = document.createElement("div");
  jobWidget.id = "kh-job-widget";
  jobWidget.classList.add("kh-col-lg-9", "kh-col-sm-12", "kh-pl-lg-3");

  var embedJobContainer = document.getElementById("kh-embed-job-container");
  embedJobContainer.appendChild(jobWidget);
}

// creating Footer Element
function khSetFooterContainer() {
  var footer = document.createElement("div");
  footer.classList.add(
    "kh-d-flex",
    "kh-flex-column",
    "kh-footer",
    "kh-container-fluid",
    "kh-justify-content-center",
    "kh-position-absolute"
  );

  // Create the companyShortName paragraph
  var companyShortName = document.createElement("p");
  companyShortName.classList.add("kh-text-center", "kh-text-secondary");
  companyShortName.id = "kh-companyShortName";

  // Create the company-social-links element
  var companySocialLinksContainer = document.createElement("div");
  companySocialLinksContainer.classList.add(
    "kh-d-flex",
    "kh-align-items-center",
    "kh-justify-content-center",
    "kh-mb-3"
  );

  var companySocialLinks = document.createElement("div");
  companySocialLinks.classList.add(
    "kh-company-social-links",
    "kh-align-middle"
  );

  // Create the footer-content element
  var footerContent = document.createElement("div");
  footerContent.classList.add(
    "kh-text-center",
    "kh-py-3",
    "kh-footer-content",
    "kh-w-100",
    "kh-d-flex",
    "kh-align-items-center",
    "kh-justify-content-center"
  );

  // Create the year span
  var yearSpan = document.createElement("span");
  yearSpan.classList.add(
    "kh-text-secondary",
    "kh-align-middle",
    "kh-pr-2",
    "kh-font-normal"
  );
  yearSpan.innerHTML = '&copy; <span id="year"></span> Keka Hire. Powered by ';

  // Create the keka logo anchor
  var kekaLogoAnchor = document.createElement("a");
  kekaLogoAnchor.href = "https://www.keka.com";
  kekaLogoAnchor.target = "_blank";

  // Create the keka logo image
  var kekaLogoImage = document.createElement("img");
  kekaLogoImage.width = "50";
  kekaLogoImage.src =
    "https://cdn.kekastatic.net/shared/branding/logo/keka-logo-black.svg";

  // Append elements to their respective parent containers
  footer.appendChild(companyShortName);
  footer.appendChild(companySocialLinksContainer);
  companySocialLinksContainer.appendChild(companySocialLinks);
  footerContent.appendChild(yearSpan);
  kekaLogoAnchor.appendChild(kekaLogoImage);
  footerContent.appendChild(kekaLogoAnchor);
  footer.appendChild(footerContent);

  var mainContainer = document.getElementById("kh-main-container");
  mainContainer.appendChild(footer);
}

function init(isCareersPage) {
  khSetStyles();
  khSetJobFilterContainer();
  khSetJobWidgetContainer();
  if (!isCareersPage) {
    khSetFooterContainer();
  }
}

const SocialNetworkType = {
  Skype: 0,
  LinkedIn: 1,
  Facebook: 2,
  Twitter: 3,
  GooglePlus: 4,
  Website: 5,
  GitHub: 6,
  Medium: 7,
  Behance: 8,
  Instagram: 9,
  Dribble: 10,
  Quora: 11,
  Youtube: 12,
};

var jobTypeList = [
  {
    id: 1,
    name: "Part Time",
  },
  {
    id: 2,
    name: "Full Time",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  loadEmbedJobs();
});

function loadEmbedJobs(isCareersPage = false) {
  init(isCareersPage);
  var departmentList = [];
  var locationList = [];
  var jobList = [];
  var filtersTemplate;

  function JobWidget() {
    Promise.all([
      fetch(
        khConfig.domain + "api/embedjobs/departments/" + khConfig.identifier
      ).then((response) => response.json()),
      fetch(
        khConfig.domain + "api/embedjobs/active/" + khConfig.identifier
      ).then((response) => response.json()),
      fetch(
        khConfig.domain + "api/embedjobs/orgcolorcode/" + khConfig.identifier
      ).then((response) => response.json()),
      fetch(khConfig.domain + "api/embedjobs/orgsociallinks").then((response) =>
        response.json()
      ),
      fetch(khConfig.domain + "api/organization/companyInfo").then((response) =>
        response.json()
      ),
    ]).then(
      ([departments, jobs, orgColorCode, orgSocialLinks, CompanyData]) => {
        const companyInfo = CompanyData;
        if (document.querySelector("#kh-companyShortName")) {
          document.querySelector("#kh-companyShortName").textContent =
            companyInfo.shortName;
        }
        khGetTargetContainer().querySelector(
          ".kh-main-container"
        ).style.fontFamily = companyInfo.fontFamily;
        jobListingFormat = companyInfo.jobListingSetting.jobListingFormat;
        hasJobSalaryRangeField = companyInfo.jobListingSetting.jobFields
          ?.map((l) => l.toLowerCase())
          .includes("salaryrange");
        hasJobLocationField = companyInfo.jobListingSetting.jobFields
          ?.map((l) => l.toLowerCase())
          .includes("location");
        hasJobExperienceField = companyInfo.jobListingSetting.jobFields
          ?.map((l) => l.toLowerCase())
          .includes("experience");
        hasJobTypeField = companyInfo.jobListingSetting.jobFields
          ?.map((l) => l.toLowerCase())
          .includes("jobtype");
        hasJobPostingDateField = companyInfo.jobListingSetting.jobFields
          ?.map((l) => l.toLowerCase())
          .includes("dateofposting");
        hasJobDepartmentFilter = companyInfo.jobListingSetting.filters
          ?.map((l) => l.toLowerCase())
          .includes("department");
        hasJobLocationFilter = companyInfo.jobListingSetting.filters
          ?.map((l) => l.toLowerCase())
          .includes("location");
        hasJobTypeFilter = companyInfo.jobListingSetting.filters
          ?.map((l) => l.toLowerCase())
          .includes("jobtype");
        departmentList = departments;
        locationList = [];
        jobList = jobs;
        filtersTemplate =
          '<div class="kh-card">' +
          '<div class="kh-card-body">' +
          '<ul class="kh-list-unstyled kh-overflow-x-hidden kh-mb-0">' +
          "<li>" +
          '<div class="kh-d-flex kh-align-items-center">' +
          '<div class="kh-input-search kh-position-relative kh-w-100 kh-mb-0 kh-d-flex kh-align-items-center">' +
          '<span class="ki-search kh-icon kh-icon-sm kh-position-absolute kh-ml-8 kh-d-flex kh-align-items-center"></span>' +
          '<input class="kh-form-control" placeholder="Search" onkeyup="filterJobs()" id="kh-hiro-searchText">' +
          "</div>" +
          '<span class="kh-icon ki-clear-filter kh-icon-lg kh-cursor-pointer kh-ml-2" onclick="clearAllFilters()"></span>' +
          "</div>" +
          "</li>" +
          (hasJobDepartmentFilter
            ? '<li class="kh-mt-3">' +
              '<div class="kh-accordion-item">' +
              '<div class="kh-accordion-title">' +
              '<div class="kh-d-flex kh-align-items-center kh-justify-content-between kh-cursor-pointer">' +
              '<span class="kh-font-large">Department</span>' +
              '<span class="ki-arrow-dropdown kh-icon kh-d-flex kh-align-items-center kh-justify-content-center"></span>' +
              "</div>" +
              "</div>" +
              '<div class="kh-accordion-content">' +
              '<ul class="kh-list-unstyled kh-font-normal kh-my-2 kh-ml-4" id="kh-hiro-departments"></ul>' +
              "</div>" +
              "</div>" +
              "</li>"
            : "") +
          (hasJobLocationFilter
            ? '<li class="kh-mt-3">' +
              '<div class="kh-accordion-item">' +
              '<div class="kh-accordion-title">' +
              '<div class="kh-d-flex kh-align-items-center kh-justify-content-between kh-cursor-pointer">' +
              '<span class="kh-font-large">Location</span>' +
              '<span class="ki-arrow-dropdown kh-icon kh-d-flex kh-align-items-center kh-justify-content-center"></span>' +
              "</div>" +
              "</div>" +
              '<div class="kh-accordion-content">' +
              '<ul class="kh-list-unstyled kh-font-normal kh-my-2 kh-ml-4" id="kh-hiro-locations"></ul>' +
              "</div>" +
              "</div>" +
              "</li>"
            : "") +
          (hasJobTypeFilter
            ? '<li class="kh-mt-3">' +
              '<div class="kh-accordion-item">' +
              '<div class="kh-accordion-title">' +
              '<div class="kh-d-flex kh-align-items-center kh-justify-content-between kh-cursor-pointer">' +
              '<span class="kh-font-large">Job Type</span>' +
              '<span class="ki-arrow-dropdown kh-icon kh-d-flex kh-align-items-center kh-justify-content-center"></span>' +
              "</div>" +
              "</div>" +
              '<div class="kh-accordion-content">' +
              '<ul class="kh-list-unstyled kh-font-normal kh-my-2 kh-ml-4" id="kh-hiro-jobType"></ul>' +
              "</div>" +
              "</div>" +
              "</li>"
            : "") +
          "</ul>";
        document
          .querySelector("#kh-embed-jobs-filters")
          .insertAdjacentHTML("afterbegin", filtersTemplate);

        khGetTargetContainer()
          .querySelector(".kh-main-container")
          .style.setProperty(
            "--theme-color",
            hexToRgbNew(orgColorCode.toString()) || hexToRgbNew("#356BB4")
          );
        jobList.forEach((job) => {
          job.jobLocations.forEach((location) => {
            if (
              !locationList.some(function (l) {
                return l.name
                  ? l.name === location.name || l.name === location.city
                  : l.city === location.city;
              })
            ) {
              locationList.push(location);
            }
          });
        });
        departmentList = departmentList.filter(
          (d) => jobList.map((j) => j.departmentId).indexOf(d.id) !== -1
        );
        bindFilters();
        bindJobs(jobList);
        addSocialLinks(orgSocialLinks);
        accordion();
      }
    );
  }

  function addSocialLinks(socialLinks) {
    var socialLinksContainer = document.querySelector(
      ".kh-company-social-links"
    );
    if (socialLinks && socialLinksContainer) {
      for (var i = 0; i < socialLinks.length; i++) {
        if (socialLinks[i].type === SocialNetworkType.LinkedIn) {
          var linkedInLink = document.createElement("a");
          linkedInLink.className = "header-3 kh-mr-3";
          linkedInLink.target = "_blank";
          linkedInLink.href = socialLinks[i].url;
          linkedInLink.innerHTML = '<span class="ki-linkedin-square"></span>';
          socialLinksContainer.appendChild(linkedInLink);
        } else if (socialLinks[i].type === SocialNetworkType.Twitter) {
          var twitterLink = document.createElement("a");
          twitterLink.className = "header-3 kh-mr-3";
          twitterLink.target = "_blank";
          twitterLink.href = socialLinks[i].url;
          twitterLink.innerHTML = '<span class="ki-twitter"></span>';
          socialLinksContainer.appendChild(twitterLink);
        } else if (socialLinks[i].type === SocialNetworkType.Instagram) {
          var instagramLink = document.createElement("a");
          instagramLink.className = "header-3 kh-mr-3";
          instagramLink.target = "_blank";
          instagramLink.href = socialLinks[i].url;
          instagramLink.innerHTML = '<span class="ki-instagram-fill"></span>';
          socialLinksContainer.appendChild(instagramLink);
        } else if (socialLinks[i].type === SocialNetworkType.Youtube) {
          var youtubeLink = document.createElement("a");
          youtubeLink.className = "header-3 kh-mr-3";
          youtubeLink.target = "_blank";
          youtubeLink.href = socialLinks[i].url;
          youtubeLink.innerHTML = '<span class="ki-youtube-fill"></span>';
          socialLinksContainer.appendChild(youtubeLink);
        }
      }
    }
  }

  function hexToRgbNew(hex) {
    const rgbArray = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
    return rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2];
  }

  function bindJobs(jobs) {
    const jobGroupBy = jobs.reduce((group, item) => {
      let { departmentName } = item;
      group[departmentName] = group[departmentName] ?? [];
      group[departmentName].push(item);
      return group;
    }, {});

    const orderedJobs = Object.keys(jobGroupBy)
      .sort()
      .reduce(function (result, key) {
        result[key] = jobGroupBy[key];
        result[key].sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase ? 1 : -1
        );
        return result;
      }, {});

    var jobListTemplate = "";
    Object.keys(orderedJobs).forEach((departmentIndex) => {
      jobListTemplate +=
        '<div class="kh-mb-3 kh-row kh-no-gutters kh-w-100"><h1 class="kh-font-weight-600 kh-col-sm-12 kh-mb-16 kh-mt-0 kh-d-flex kh-align-items-center kh-flex-wrap kh-text-truncate-2" title="' +
        departmentIndex +
        '">' +
        departmentIndex +
        '<span class="kh-text-lowercase kh-badge kh-badge-pill kh-bg-secondary kh-ml-2 kh-font-weight-normal kh-text-small kh-px-3 kh-py-1">' +
        orderedJobs[departmentIndex].length +
        (orderedJobs[departmentIndex].length == 1 ? " job" : " jobs") +
        "</span></h1>";
      orderedJobs[departmentIndex].forEach((job, index) => {
        if (job && job.experience) {
          const experienceRegex = /^[0-9]+[.]?[0-9]*[ ]*[+]?$/g;
          job.experience =
            experienceRegex.test(job.experience) && job.experience > 0
              ? job.experience + (+job.experience === 1 ? " year" : " years")
              : job.experience;
        }
        hasJobSalaryRangeItem =
          hasJobSalaryRangeField &&
          job.salaryRangeFormat &&
          job.salaryRange.maximum !== 0;
        hasJobLocationItem = hasJobLocationField && job.jobLocations.length > 0;
        hasJobExperienceItem = hasJobExperienceField && job.experience;
        hasJobTypeItem = hasJobTypeField && job.jobType;
        jobListTemplate +=
          '<div class="kh-col-sm-12 kh-mb-16 ' +
          (jobListingFormat == 1 ? "kh-col-md-12" : "kh-col-md-6") +
          (jobListingFormat == 2 && index % 2 == 0 ? " kh-pr-md-8" : "") +
          (jobListingFormat == 2 && index % 2 != 0 ? " kh-pl-md-8" : "") +
          '">' +
          '<a class="kh-card kh-job-card kh-h-100 kh-job-container" href="' +
          khConfig.domain +
          "jobdetails/" +
          job.id +
          (isCareersPage ? '">' : '" target="_blank">') +
          '<div class="kh-card-body kh-d-flex kh-flex-column kh-py-3">' +
          '<div class="kh-d-flex kh-align-items-center kh-justify-content-between"><div>' +
          '<div class="kh-d-flex kh-align-items-center kh-mb-1 kh-flex-wrap"><h3 class="kh-job-title kh-text-truncate-2 kh-text-dark kh-font-weight-600 kh-mb-0 kh-mr-2" title="' +
          job.title +
          '">' +
          job.title +
          "</h3>" +
          (hasJobPostingDateField
            ? '<span class="kh-text-secondary kh-font-normal">' +
              job.publishedSinceDays +
              (job.publishedSinceDays > 1 ? " days" : " day") +
              " ago</span>"
            : "") +
          "</div>" +
          '<div class="kh-d-flex kh-text-secondary kh-align-items-center mt-auto">' +
          '<div class="kh-d-flex kh-align-items-center kh-flex-wrap">' +
          (hasJobLocationItem
            ? `${
                job.jobLocations.length > 2
                  ? '<span class="kh-font-large kh-text-capitalize kh-text-truncate-1 kh-mr-1" title="' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    '">' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    '</span><span class="kh-font-normal" title="' +
                    job.jobLocations
                      .slice(1)
                      .map((j) => (j.name ? j.name : j.city))
                      .join(", ") +
                    '"> +' +
                    (job.jobLocations.length - 1) +
                    " locations </span>"
                  : job.jobLocations.length == 2
                  ? '<span class="kh-font-large kh-text-capitalize text-nowrap kh-text-truncate-1 mr-1" title="' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    '">' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    "</span>," +
                    '<span class="kh-font-large kh-text-capitalize text-nowrap kh-text-truncate-1 mr-1" title="' +
                    (job.jobLocations && job.jobLocations[1].name
                      ? job.jobLocations[1].name
                      : job.jobLocations[1].city) +
                    '"> ' +
                    (job.jobLocations && job.jobLocations[1].name
                      ? job.jobLocations[1].name
                      : job.jobLocations[1].city) +
                    "</span>"
                  : '<span class="kh-font-large kh-text-capitalize text-nowrap kh-text-truncate-1" title="' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    '">' +
                    (job.jobLocations && job.jobLocations[0].name
                      ? job.jobLocations[0].name
                      : job.jobLocations[0].city) +
                    "</span>"
              }`
            : "") +
          (hasJobLocationItem && hasJobExperienceItem
            ? '<div class="kh-dot kh-dot-xs kh-bg-slate-900 kh-mx-2"></div>'
            : "") +
          (hasJobExperienceItem
            ? '<span class="kh-font-normal kh-text-capitalize kh-text-truncate-1" title="' +
              job.experience +
              '">' +
              job.experience +
              " </span>"
            : "") +
          ((hasJobLocationItem && hasJobExperienceItem && hasJobTypeItem) ||
          (hasJobTypeItem && hasJobExperienceItem) ||
          (hasJobLocationItem && hasJobTypeItem)
            ? '<div class="kh-dot kh-dot-xs kh-bg-slate-900 kh-mx-2"></div>'
            : "") +
          (hasJobTypeItem
            ? '<p class="kh-font-normal kh-clear-magin" >' +
              (job.jobType && job.jobType == 2 ? "Full Time" : "Part time") +
              "</p>"
            : "") +
          ((hasJobLocationItem &&
            hasJobExperienceItem &&
            hasJobTypeItem &&
            hasJobSalaryRangeItem) ||
          (hasJobSalaryRangeItem && hasJobExperienceItem) ||
          (hasJobLocationItem && hasJobSalaryRangeItem) ||
          (hasJobTypeItem && hasJobSalaryRangeItem)
            ? '<div class="kh-dot kh-dot-xs kh-bg-slate-900 kh-mx-2"></div>'
            : "") +
          (hasJobSalaryRangeItem
            ? (job.salaryRange.currency
                ? '<p class="kh-mr-1 kh-font-normal kh-clear-magin">' +
                  job.salaryRange.currency +
                  "</p>"
                : "") +
              '<p class="kh-font-normal kh-clear-magin">' +
              job.salaryRange.minimum +
              "</p>" +
              '<span class="kh-mx-4">-</span>' +
              '<p class="kh-font-normal kh-clear-magin">' +
              job.salaryRange.maximum +
              "</p>"
            : "") +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="kh-px-1 kh-d-none ' +
          (jobListingFormat == 1 ? "kh-d-md-block " : "") +
          '"><span class="ki-circle-arrow-right-fill kh-icon kh-icon-lg kh-my-auto kh-rotate-315 kh-d-none"></span></div>' +
          "</div>" +
          "</div>" +
          "</a>" +
          "</div>";
      });
      jobListTemplate += "</div>";
    });

    var jobWidget = document.getElementById("kh-job-widget");
    if (jobs.length > 0) {
      jobWidget.innerHTML = jobListTemplate;
    } else {
      jobWidget.innerHTML =
        '<div class="kh-alert kh-alert-info kh-col-sm-12 kh-px-3 kh-mt-4">There are no job postings matching the filters.</div>';
    }
  }

  function bindFilters() {
    var departmentSelect = document.getElementById("kh-hiro-departments");
    if (departmentSelect) {
      departmentList.forEach(function (department) {
        var listItem = document.createElement("li");
        listItem.className = "kh-form-check";
        departmentSelect.appendChild(listItem);

        var input = document.createElement("input");
        input.className = "kh-form-check-input";
        input.type = "checkbox";
        input.id = department.id;
        input.value = department.id;
        input.name = "departments";
        input.onchange = function () {
          filterJobs();
        };
        listItem.appendChild(input);

        var label = document.createElement("label");
        label.className =
          "kh-form-check-label kh-cursor-pointer kh-text-truncate-2 kh-pl-2";
        label.setAttribute("for", department.id);
        label.innerHTML = department.name;
        listItem.appendChild(label);
      });
    }

    var jobTypeSelect = document.getElementById("kh-hiro-jobType");
    if (jobTypeSelect) {
      jobTypeList.forEach(function (jobType) {
        var listItem = document.createElement("li");
        listItem.className = "kh-form-check";
        jobTypeSelect.appendChild(listItem);

        var input = document.createElement("input");
        input.className = "kh-form-check-input";
        input.type = "checkbox";
        input.id = jobType.id;
        input.value = jobType.id;
        input.name = "jobTypes";
        input.onchange = function () {
          filterJobs();
        };
        listItem.appendChild(input);

        var label = document.createElement("label");
        label.className =
          "kh-form-check-label kh-cursor-pointer kh-text-truncate-2 kh-pl-2";
        label.setAttribute("for", jobType.id);
        label.innerHTML = jobType.name;
        listItem.appendChild(label);
      });
    }
    var locationSelect = document.getElementById("kh-hiro-locations");
    if (locationSelect) {
      locationList.forEach(function (location) {
        var listItem = document.createElement("li");
        listItem.className = "kh-form-check";
        locationSelect.appendChild(listItem);

        var input = document.createElement("input");
        input.className = "kh-form-check-input";
        input.type = "checkbox";
        input.id = location.name ? location.name : location.city;
        input.value = location.name ? location.name : location.city;
        input.name = "locations";
        input.onchange = function () {
          filterJobs();
        };
        listItem.appendChild(input);

        var label = document.createElement("label");
        label.className =
          "kh-form-check-label kh-cursor-pointer kh-text-truncate-2 kh-pl-2";
        label.setAttribute(
          "for",
          location.name ? location.name : location.city
        );
        label.innerHTML = location.name ? location.name : location.city;
        listItem.appendChild(label);
      });
    }
  }

  window.filterJobs = function () {
    var departmentId = getCheckedBoxes("departments");
    var jobTypeId = getCheckedBoxes("jobTypes");
    var locationName = getCheckedBoxes("locations");
    var searchText = document.getElementById("kh-hiro-searchText")?.value;

    if (locationName || departmentId || searchText || jobTypeId) {
      groupJobs(departmentId, locationName, searchText, jobTypeId);
    } else {
      bindJobs(jobList);
    }
  };

  function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    if (chkboxName === "locations") {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
        }
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxesChecked.push(parseInt(checkboxes[i].value));
        }
      }
    }

    return checkboxesChecked;
  }

  window.clearAllFilters = function () {
    document
      .querySelectorAll('input[name="departments"]:checked')
      .forEach((el) => (el.checked = false));
    document
      .querySelectorAll('input[name="locations"]:checked')
      .forEach((el) => (el.checked = false));
    document
      .querySelectorAll('input[name="jobTypes"]:checked')
      .forEach((el) => (el.checked = false));
    document.getElementById("kh-hiro-searchText").value = "";

    bindJobs(jobList);
  };

  function groupJobs(departmentId, locationName, searchText, jobTypeId) {
    var jobs = jobList.filter(function (j) {
      var lNames = j.jobLocations.filter((lc) => lc.name).map((l) => l.name);
      var lCities = j.jobLocations.filter((lc) => lc.city).map((l) => l.city);
      return (
        (departmentId.length === 0 || departmentId.includes(j.departmentId)) &&
        (jobTypeId.length === 0 || jobTypeId.includes(j.jobType)) &&
        (locationName.length === 0 ||
          (lNames &&
            lNames.length &&
            locationName.some((ln) => lNames.includes(ln))) ||
          (lCities &&
            lCities.length &&
            locationName.some((lc) => lCities.includes(lc))))
      );
    });
    searchText === ""
      ? bindJobs(jobs)
      : bindJobs(
          jobs.filter(function (j) {
            return (
              j.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
              j.departmentName
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) !== -1
            );
          })
        );
  }

  JobWidget();
  var date = new Date().getFullYear();
  if (document.getElementById("year")) {
    document.getElementById("year").innerText = date;
  }

  function accordion() {
    const accordionTitles = document.querySelectorAll(".kh-accordion-title");

    accordionTitles.forEach((accordionTitle) => {
      accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("kh-is-open")) {
          accordionTitle.classList.remove("kh-is-open");
        } else {
          accordionTitle.classList.add("kh-is-open");
        }
      });
    });
  }
}
