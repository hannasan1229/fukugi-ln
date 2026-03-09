function baseMailLayout({ headline, content, footerNote }) {
  return `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
  <tr>
    <td align="center" style="padding:18px 0;">

      <table width="600" cellpadding="0" cellspacing="0" style="background:#fffbe9;">
        <!-- Logo -->
        <tr>
          <td align="center" style="padding:24px 0;">
            <img
              src="https://konoha-tech.web.app/logo.png"
              width="140"
              alt="Fukugi"
              style="display:block;border:0;outline:none;"
            />
          </td>
        </tr>

        <!-- Headline -->
        <tr>
          <td align="center"
              style="
                font-size:26px;
                line-height:34px;
                font-weight:bold;
                color:#5a8f00;
                font-family:Arial, sans-serif;
                padding:0 24px 24px;
              ">
            ${headline}
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td
            style="
              font-size:16px;
              line-height:26px;
              color:#222;
              font-family:Arial, sans-serif;
              padding:0 48px 24px;
            ">
            ${content}
          </td>
        </tr>

        ${
          footerNote
            ? `
        <tr>
          <td
            style="
              font-size:12px;
              line-height:18px;
              color:#666;
              font-family:Arial, sans-serif;
              padding:0 48px 24px;
            ">
            ${footerNote}
          </td>
        </tr>`
            : ""
        }
      </table>

    </td>
  </tr>
</table>`;
}

module.exports = { baseMailLayout };
