// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    //labels: ["52000", "53000", "54000", "55000", "56000", "57000", "58000", "59000"],
    datasets: [{
      label: "Count",
      showLine: true,
      lineTension: 0,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 2,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [
                  { x: 51934.0203240742, y: 1 },
                  { x: 51973.5203240742, y: 2 },
                  { x: 51980.4630555557, y: 3 },
                  { x: 52081.5431828703, y: 4 },
                  { x: 52114.826412037, y: 5 },
                  { x: 55007.912395833, y: 6 },
                  { x: 55606.3015046296, y: 7 },
                  { x: 55612.0804166668, y: 8 },
                  { x: 55704.629398148, y: 9 },
                  { x: 55738.8981134258, y: 10 },
                  { x: 55745.7914467593, y: 11 },
                  { x: 55953.3412268515, y: 12 },
                  { x: 56202.5481249997, y: 13 },
                  { x: 56229.671134259, y: 14 },
                  { x: 56233.2749189813, y: 15 },
                  { x: 56469.6222222223, y: 16 },
                  { x: 56471.1652777777, y: 17 },
                  { x: 56502.3762847222, y: 18 },
                  { x: 56595.6758680557, y: 19 },
                  { x: 56600.7529050926, y: 20 },
                  { x: 56700.4383564814, y: 21 },
                  { x: 56791.7181828701, y: 22 },
                  { x: 56974.3214699076, y: 23 },
                  { x: 57007.5440277778, y: 24 },
                  { x: 57068.8622916666, y: 25 },
                  { x: 57130.1868865741, y: 26 },
                  { x: 57159.7376041663, y: 27 },
                  { x: 57159.7442245371, y: 28 },
                  { x: 57175.6931481482, y: 29 },
                  { x: 57175.699722222, y: 30 },
                  { x: 57175.7425810182, y: 31 },
                  { x: 57175.7428356483, y: 32 },
                  { x: 57175.7435069442, y: 33 },
                  { x: 57175.7456712964, y: 34 },
                  { x: 57175.7476273146, y: 35 },
                  { x: 57175.748287037, y: 36 },
                  { x: 57183.2270717592, y: 37 },
                  { x: 57241.745787037, y: 38 },
                  { x: 57313.0456944443, y: 39 },
                  { x: 57339.3560416665, y: 40 },
                  { x: 57345.4476967593, y: 41 },
                  { x: 57345.4524884261, y: 42 },
                  { x: 57345.4575925925, y: 43 },
                  { x: 57345.4624074073, y: 44 },
                  { x: 57351.654583333, y: 45 },
                  { x: 57362.2624189816, y: 46 },
                  { x: 57364.2046296298, y: 47 },
                  { x: 57386.6776273148, y: 48 },
                  { x: 57389.3532291669, y: 49 },
                  { x: 57424.4353009257, y: 50 },
                  { x: 57464.3754282407, y: 51 },
                  { x: 57488.3567129629, y: 52 },
                  { x: 57547.1618171297, y: 53 },
                  { x: 57623.7440277775, y: 54 },
                  { x: 57651.1289699072, y: 55 },
                  { x: 57724.5589583334, y: 56 },
                  { x: 57760.836898148, y: 57 },
                  { x: 57859.966122685, y: 58 },
                  { x: 57871.7517939815, y: 59 },
                  { x: 57910.4190624998, y: 60 },
                  { x: 57941.262199074, y: 61 },
                  { x: 57946.5571412034, y: 62 },
                  { x: 57991.5777893518, y: 63 },
                  { x: 57992.6807638891, y: 64 },
                  { x: 58002.5464814817, y: 65 },
                  { x: 58018.4746874999, y: 66 },
                  { x: 58029.1718055554, y: 67 },
                  { x: 58030.1414236109, y: 68 },
                  { x: 58045.5601851851, y: 69 },
                  { x: 58046.4360995371, y: 70 },
                  { x: 58073.6246874998, y: 71 },
                  { x: 58096.8572222222, y: 72 },
                  { x: 58100.599074074, y: 73 },
                  { x: 58103.7494328701, y: 74 },
                  { x: 58128.3156828703, y: 75 },
                  { x: 58137.5170254628, y: 76 },
                  { x: 58146.0414236113, y: 77 },
                  { x: 58146.2037847223, y: 78 },
                  { x: 58148.2052083332, y: 79 },
                  { x: 58149.2396296295, y: 80 },
                  { x: 58161.9896296295, y: 81 },
                  { x: 58178.3155092592, y: 82 },
                  { x: 58186.1177430553, y: 83 },
                  { x: 58188.1749421297, y: 84 },
                  { x: 58192.2121643517, y: 85 },
                  { x: 58198.2957638888, y: 86 },
                  { x: 58201.3970717592, y: 87 },
                  { x: 58225.5545254629, y: 88 },
                  { x: 58238.4166550925, y: 89 },
                  { x: 58253.9148842589, y: 90 },
                  { x: 58263.6382754631, y: 91 },
                  { x: 58266.1833449071, y: 92 },
                  { x: 58313.4167708335, y: 93 },
                  { x: 58324.7498032408, y: 94 },
                  { x: 58326.0362615739, y: 95 },
                  { x: 58328.0335648148, y: 96 },
                  { x: 58328.7280324073, y: 97 },
                  { x: 58331.3662499999, y: 98 },
                  { x: 58336.5925115738, y: 99 },
                  { x: 58340.7284722221, y: 100 },
                  { x: 58340.9449537037, y: 101 },
                  { x: 58342.4900925923, y: 102 },
                  { x: 58344.6179398149, y: 103 },
                  { x: 58344.5974189816, y: 104 },
                  { x: 58347.0760879628, y: 105 },
                  { x: 58369.8840740742, y: 106 },
                  { x: 58372.5411574076, y: 107 },
                  { x: 58377.4273148146, y: 108 },
                  { x: 58378.0323842591, y: 109 },
                  { x: 58380.5251388889, y: 110 },
                  { x: 58384.1691898149, y: 111 },
                  { x: 58385.6827893517, y: 112 },
                  { x: 58407.1784259257, y: 113 },
                  { x: 58408.9765277775, y: 114 },
                  { x: 58408.4337615743, y: 115 },
                  { x: 58408.665197, y: 116 },
                  { x: 58410.3426273148, y: 117 },
                  { x: 58419.4254050925, y: 118 },
                  { x: 58421.1758449072, y: 119 },
                  { x: 58421.1780324075, y: 120 },
                  { x: 58426.2898032409, y: 121 },
                  { x: 58426.2965509258, y: 122 },
                  { x: 58434.730034722, y: 123 },
                  { x: 58440.3644675924, y: 124 },
                  { x: 58440.877654, y: 125 },
                  { x: 58441.7007291666, y: 126 },
                  { x: 58442.2472916664, y: 127 },
                  { x: 58442.2472916664, y: 128 },
                  { x: 58442.3510185186, y: 129 },
                  { x: 58445.7424652776, y: 130 },
                  { x: 58450.3525694445, y: 131 },
                  { x: 58452.542674, y: 132 },
                  { x: 58471.2949305553, y: 133 },
                  { x: 58474.1662384257, y: 134 },
                  { x: 58475.160752315, y: 135 },
                  { x: 58477.1618518517, y: 136 },
                  { x: 58478.1552083333, y: 137 },
                  { x: 58480.5755787035, y: 138 },
                  { x: 58485.2352199074, y: 139 },
                  { x: 58486.5745717594, y: 140 },
                  { x: 58499.546921296, y: 141 },
                  { x: 58499.5474537038, y: 142 },
                  { x: 58500.9295370369, y: 143 },
                  { x: 58509.0644097221, y: 144 },
                  { x: 58522.7373958332, y: 145 },
                  { x: 58523.3474652776, y: 146 },
                  { x: 58524.3453009258, y: 147 },
                  { x: 58526.6787499999, y: 148 },
                  { x: 58527.0294791664, y: 149 },
                  { x: 58527.7149652778, y: 150 },
                  { x: 58530.6437268517, y: 151 },
                  { x: 58536.7819560184, y: 152 },
                  { x: 58538.0793749997, y: 153 },
                  { x: 58543.7521064812, y: 154 },
                  { x: 58544.0971874999, y: 155 },
                  { x: 58545.4620023146, y: 156 },
                  { x: 58555.3901273147, y: 157 },
                  { x: 58564.2918055555, y: 158 },
                  { x: 58571.9988541668, y: 159 },
                  { x: 58579.5801273146, y: 160 },
                  { x: 58590.5806134259, y: 161 },
                  { x: 58594.333460648, y: 162 },
                  { x: 58618.773460648, y: 163 },
                  { x: 58619.4415162038, y: 164 },
                  { x: 58620.8566782409, y: 165 },
                  { x: 58621.7595254629, y: 166 },
                  { x: 58622.7433564811, y: 167 },
                  { x: 58622.7562731481, y: 168 },
                  { x: 58622.7575231483, y: 169 },
                  { x: 58626.2541203703, y: 170 },
                  { x: 58630.8609027778, y: 171 },
                  { x: 58637.7148495372, y: 172 },
                  { x: 58638.2430208334, y: 173 },
                  { x: 58638.7164351851, y: 174 },
                  { x: 58638.7164351851, y: 175 },
                  { x: 58639.7056134259, y: 176 },
                  { x: 58639.7100810185, y: 177 },
                  { x: 58640.2323148148, y: 178 },
                  { x: 58642.9501504628, y: 179 },
                  { x: 58645.7866087965, y: 180 },
                  { x: 58645.2400810187, y: 181 },
                  { x: 58648.0507175927, y: 182 },
                  { x: 58653.0961342593, y: 183 },
                  { x: 58653.111261574, y: 184 },
                  { x: 58653.1465972224, y: 185 },
                  { x: 58653.2785069444, y: 186 },
                  { x: 58655.0981944445, y: 187 },
                  { x: 58659.738738426, y: 188 },
                  { x: 58660.7763078706, y: 189 },
                  { x: 58664.4824652778, y: 190 },
                  { x: 58666.0821180557, y: 191 },
                  { x: 58666.1352199073, y: 192 },
                  { x: 58675.0789467589, y: 193 },
                  { x: 58678.2341782408, y: 194 },
                  { x: 58682.049571759, y: 195 },
                  { x: 58699.8295138888, y: 196 },
                  { x: 58701.2758101853, y: 197 },
                  { x: 58704.5352893518, y: 198 },
                  { x: 58705.3697916665, y: 199 },
                  { x: 58705.5345370369, y: 200 },
                  { x: 58710.3568518515, y: 201 },
                  { x: 58712.6110879629, y: 202 },
                  { x: 58719.3326620371, y: 203 },
                  { x: 58720.4919907408, y: 204 },
                  { x: 58720.4944791668, y: 205 },
                  { x: 58720.495659722, y: 206 },
                  { x: 58733.7102777776, y: 207 },
                  { x: 58741.6858912035, y: 208 },
                  { x: 58751.6626273146, y: 209 },
                  { x: 58752.8468634258, y: 210 },
                  { x: 58755.1351388888, y: 211 },
                  { x: 58757.7052777777, y: 212 },
                  { x: 58769.855162037, y: 213 },
                  { x: 58774.7732986109, y: 214 },
                  { x: 58776.825590278, y: 215 },
                  { x: 58777.5959374997, y: 216 },
                  { x: 58785.4041550923, y: 217 },
                  { x: 58785.8084027776, y: 218 },
                  { x: 58786.3152430555, y: 219 },
                  { x: 58786.3207523147, y: 220 },
                  { x: 58794.8910532407, y: 221 },
                  { x: 58794.7886226852, y: 222 },
                  { x: 58795.8255787035, y: 223 },
                  { x: 58797.7729398147, y: 224 },
                  { x: 58798.3717129631, y: 225 },
                  { x: 58800.7586574074, y: 226 },
                  { x: 58802.2584027778, y: 227 },
                  { x: 58803.7568402779, y: 228 },
                  { x: 58804.7628587964, y: 229 },
                  { x: 58819.6558912037, y: 230 },
                  { x: 58822.6557291667, y: 231 },
                  { x: 58832.6761921295, y: 232 },
                  { x: 58834.3603703705, y: 233 },
                  { x: 58835.1732407407, y: 234 },
                  { x: 58836.1719791665, y: 235 },
                  { x: 58836.174513889, y: 236 },
                  { x: 58836.1692939815, y: 237 },
                  { x: 58836.1692939815, y: 238 },
                  { x: 58836.1759143518, y: 239 },
                  { x: 58836.7024768516, y: 240 },
                  { x: 58837.3594907405, y: 241 },
                  { x: 58840.0049421293, y: 242 },
                  { x: 58840.2052199076, y: 243 },
                  { x: 58845.3862962964, y: 244 },
                  { x: 58848.6373842591, y: 245 },
                  { x: 58860.6017824076, y: 246 },
                  { x: 58868.0758564816, y: 247 },
                  { x: 58868.0822106478, y: 248 },
                  { x: 58868.0846180557, y: 249 },
                  { x: 58868.0867939814, y: 250 },
                  { x: 58870.4309374997, y: 251 },
                  { x: 58870.4354166667, y: 252 },
                  { x: 58870.4363425923, y: 253 },
                  { x: 58870.9232754628, y: 254 },
                  { x: 58870.9235185184, y: 255 },
                  { x: 58870.9321874999, y: 256 },
                  { x: 58870.9328703703, y: 257 },
                  { x: 58872.7798379631, y: 258 },
                  { x: 58872.8087152778, y: 259 },
                  { x: 58873.5106481481, y: 260 },
                  { x: 58882.0467939814, y: 261 },
                  { x: 58883.0186921297, y: 262 },
                  { x: 58883.0399537039, y: 263 },
                  { x: 58883.0415509259, y: 264 },
                  { x: 58883.0440509258, y: 265 },
                  { x: 58883.0537152779, y: 266 },
                  { x: 58898.9955671294, y: 267 },
                  { x: 58899.007060185, y: 268 },
                  { x: 58899.5614120368, y: 269 },
                  { x: 58899.5678125, y: 270 },
                  { x: 58899.575613426, y: 271 },
                  { x: 58900.0068171294, y: 272 },
                  { x: 58903.0749305556, y: 273 },
                  { x: 58910.0779629629, y: 274 },
                  { x: 58915.2137731481, y: 275 },
                  { x: 58922.6407523145, y: 276 },
                  { x: 58931.4215624998, y: 277 },
                  { x: 58931.4538773149, y: 278 },
                  { x: 58932.8999305553, y: 279 },
                  { x: 58932.3532523149, y: 280 },
                  { x: 58932.3968055555, y: 281 },
                  { x: 58944.2325694444, y: 282 },
                  { x: 58962.8412037035, y: 283 },
                  { x: 58977.3209490738, y: 284 },
                  { x: 59007.4426157409, y: 285 },
                  { x: 59016.2716782409, y: 286 },
                  { x: 59027.8081249999, y: 287 },
                  { x: 59098.9033680558, y: 288 },
                  { x: 59177.3685416667, y: 289 },
                  { x: 59177.3713657408, y: 290 },
                  { x: 59193.3296643518, y: 291 },
                  { x: 59199.3120254632, y: 292 },
                  { x: 59231.327326389, y: 293 },
                  { x: 59265.1294328705, y: 294 },
                  { x: 59274.103298611, y: 295 },
                  { x: 59276.0616550925, y: 296 },
                  { x: 59294.0502662034, y: 297 },
                  { x: 59295.0491203703, y: 298 },
                  { x: 59296.0472685182, y: 299 },
                  { x: 59299.037395833, y: 300 },
                  { x: 59300.032199074, y: 301 },
                  { x: 59300.0369328702, y: 302 },
                  { x: 59300.0369328702, y: 303 },
                  { x: 59301.0341203706, y: 304 },
                  { x: 59305.4812731482, y: 305 },
                  { x: 59306.242349537, y: 306 },
                ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          fontSize: 18,
          display: true,
          labelString: 'Modified Julian Date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontSize: 14
          //min: 51000,
          //max: 60000,
          //steps: 15
          //maxTicksLimit: 10
        }
      }],
      yAxes: [{
        scaleLabel: {
          fontSize: 18,
          display: true,
          labelString: 'FRB Count'
        },
        ticks: {
          fontSize: 14,
          maxTicksLimit: 5,
          padding: 10,
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
