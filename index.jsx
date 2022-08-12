import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


//   react code here

<>
<script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="assets/vendor/datatables/jquery.dataTables.js"></script>
    <script src="assets/vendor/datatables/dataTables.bootstrap4.js"></script>
    <script src="assets/js/sb-admin.min.js"></script>
    <script src="assets/js/sb-admin-datatables.min.js"></script>

    <script type="text/javascript" src="assets/js/loader.js"></script>
    <script>
      $('[data-tooltip="tooltip"]').tooltip();
    </script>
    <script>
      $(document).ready(function () {
        $("#dataTables1").dataTable({
          ordering: false,
          info: false,
          searching: false,
          lengthChange: false,
          paging: false,
        });
        $(function () {
          var url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
          $(".nav-item a").each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
              $(this).parent("li").addClass("active");
            }
          });
        });
      });
    </script>
    <script src="assets/js/jquery-ui.js"></script>
</>

// react code here