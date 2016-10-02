import React from 'react';

const WaterOutline = ({ strokeWidth, stroke }) =>
  <path
    fill="none"
    strokeWidth={strokeWidth}
    stroke={stroke}
    d="M65.75969999999766,23.45320000000089 65.45169999999938,23.899450000000783 63.415049999998516,25.184299999999766 62.65134999999684,26.569600000001287 62.057399999999305,27.176150000001826 61.3500499999996,27.540499999999597 60.82049999999863,27.917450000000372 60.67069999999883,28.420750000000467 60.71340000000045,28.842850000001647 61.334999999997805,30.384950000000217 55.52499999999891,36.555100000000024 51.18324999999852,41.50620000000134 50.591050000001545,43.22854999999993 50.64389999999743,44.47805000000112 49.935500000000374,44.333849999999615 50.347449999999824,46.077550000001494 51.12269999999721,46.69845000000062 49.15535000000044,53.325350000001166 41.795550000000034,54.26440000000031 36.840600000000975,56.916000000000395 35.674749999999975,56.8054000000011 34.144549999998716,55.092850000000155 35.16479999999926,50.619149999999664 36.33904999999895,50.561750000000345 37.342499999997145,39.707199999999816 39.4897499999973,35.94680000000142 44.863299999998915,28.918100000000663 54.26639999999831,15.698600000000013 58.255349999999126,10.184699999999605 58.45064999999845,9.926050000001066 58.65714999999933,9.142050000000904 58.653299999999106,9.014300000000144 59.11879999999765,7.914950000000356 59.4379999999975,7.270250000001635 59.47929999999768,7.255900000000562 59.832450000001344,6.665100000000049 59.86640000000018,6.443549999999856 59.78204999999927,5.98435000000033 59.703299999999146,5.902100000001578 59.70714999999937,5.881800000000606 59.768749999998036,5.838749999999873 59.73025000000074,5.703650000000263 59.64869999999773,5.624900000000135 59.60844999999988,5.500650000000487 59.607399999997554,5.465300000000209 59.646949999997176,5.325300000000535 59.679849999998666,5.098850000000279 59.668299999997984,4.866450000000125 59.59864999999975,4.702999999999971 59.52515000000129,4.410400000000106 59.49924999999705,4.351250000000231 59.549999999998235,4.171350000001819 59.68090000000099,4.172050000000052 59.73445000000008,4.141599999999837 59.81599999999811,4.173450000001491 59.83944999999859,4.140900000001604 59.835599999998365,4.0953999999995965 59.850999999999274,4.075450000000227 59.88215000000021,4.062500000000593 59.96929999999902,4.068799999999609 60.01444999999943,4.065300000000985 60.049100000001474,4.049550000000959 60.05505000000137,4.02960000000159 60.08900000000021,3.9938999999997087 60.27800000000052,3.872799999999568 60.757849999997646,3.700950000000727 60.979400000000325,3.5448500000019116 61.35109999999695,3.130099999999583 61.45259999999932,2.985199999999846 61.55199999999705,2.746500000000676 61.63039999999806,2.638700000001773 61.661549999998996,2.5575000000003705 61.71790000000097,2.4707000000006722 61.789299999999756,2.3832000000002544 61.89989999999905,2.1588499999996706 61.969549999997284,2.0605000000017775 62.09064999999991,1.9474500000012078 62.188299999997085,1.8148000000003854 62.18794999999797,1.8011500000000318 62.18199999999807,1.7892500000002336 62.182700000001276,1.7798000000017105 62.18759999999885,1.770000000001584 62.26634999999898,1.7210000000009522 62.369599999996936,1.5589499999997507 62.69019999999823,1.0945000000010445 63.25055000000101,0.30525000000170266 57.69779999999922,-1.0905499999981778 57.68589999999942,-0.8539499999986795 57.028599999997695,1.1771000000013991 55.811650000001364,1.4186000000009606 55.51450000000055,3.4009999999995237 55.16134999999689,4.02015000000058 53.69449999999982,5.911550000000101 52.97419999999799,7.096300000000635 52.69244999999809,7.428800000001726 53.07185000000014,7.928949999999826 52.28714999999677,8.51975000000034 51.761450000001005,8.556850000001173 52.18214999999826,9.06820000000084 52.4712499999995,9.346800000001235 51.948700000000755,11.119900000001007 51.18045000000062,12.660949999999744 50.21584999999884,14.132700000001847 49.04579999999849,15.777000000001024 48.54635000000111,16.481899999999456 48.09589999999939,17.075849999999477 48.42245000000058,17.709700000000723 46.55029999999722,20.1394000000015 44.287550000000195,21.118000000000265 43.22879999999738,22.534450000000234 43.90849999999726,22.92680000000192 40.04904999999776,28.177150000001234 37.879749999998566,30.003100000001865 37.388350000000756,30.766800000001055 37.63999999999707,31.119250000001514 37.27215000000068,31.61975000000122 36.09790000000099,32.30925000000123 35.26349999999876,33.74704999999952 35.16969999999684,34.4239500000015 34.66639999999923,34.85340000000153 34.153300000001494,35.2870500000009 32.955249999997235,36.87080000000125 32.9458000000012,38.1125999999995 33.27339999999974,40.79710000000108 33.00110000000085,41.6518000000018 32.35080000000134,44.00800000000163 31.56539999999974,45.22180000000094 30.88920000000097,45.765350000001376 30.814650000000185,47.8814500000006 30.04185000000159,49.998599999999655 29.424799999997717,52.93020000000158 29.107699999997536,53.953950000000745 29.243499999997866,55.07185000000095 26.541849999999798,55.62099999999968 21.838900000001146,60.58015000000057 17.94410000000137,59.272900000000945 16.70545000000014,60.675350000001444 16.800649999998527,62.59964999999997 15.56899999999952,66.18785000000041 18.668950000001658,67.78105000000177 16.299100000001474,70.98775000000049 10.653600000000083,69.2317999999997 11.01304999999779,72.4801500000002 10.071549999997373,73.54065000000108 8.36074999999947,74.58155000000171 6.8781499999974045,74.86014999999962 6.9015999999978845,76.07010000000119 8.504949999998487,75.78240000000139 10.3749999999972,75.03305000000078 11.017249999997134,74.83635000000002 12.229999999999094,75.02710000000089 12.556550000000286,74.9529000000017 13.269849999999892,75.05265000000104 14.554699999998874,75.70645000000165 15.932650000001544,76.43095000000034 16.38939999999731,77.0409999999995 16.588549999996857,77.66225000000023 15.972200000001166,83.25560000000148 19.65174999999728,86.0521000000013 22.572499999999238,90.24579999999996 27.90300000000012,88.41355000000031 26.716850000000633,86.88860000000072 26.162449999997747,83.52614999999982 26.45154999999899,81.34249999999955 27.936250000000726,77.30104999999948 30.807649999997963,75.84330000000182 34.39585000000089,71.48510000000068 35.87530000000096,69.78444999999954 34.0780499999975,66.64530000000187 34.028699999997755,64.1438500000007 38.012049999997785,61.69315000000071 39.370050000001086,59.607150000000104 40.58699999999742,57.893200000000206 41.74025000000039,56.32660000000132 42.736700000001335,55.537000000000376 43.19099999999831,55.35290000000013 44.52414999999969,55.23320000000143 47.73189999999825,54.85659999999977 48.604449999998664,55.020750000000646 49.80809999999873,56.10959999999959 50.487799999998614,55.65425000000029 49.91309999999724,54.95670000000071 51.22735000000158,54.292400000001734 51.65644999999752,53.161550000001895 51.8780000000002,52.370200000000395 52.44359999999968,51.0489500000013 52.74774999999774,50.58205000000132 53.11944999999933,50.26320000000058 53.09320000000095,50.03255000000098 53.22479999999696,49.836200000001824 53.420100000001256,49.901650000000714 53.566399999999945,49.6825500000018 53.761699999999266,49.42914999999995 53.926899999999975,49.29265000000139 54.07704999999889,48.911149999999665 54.37385000000059,48.31370000000102 54.231049999998035,48.185600000001145 54.396249999998744,48.14569999999992 54.68149999999976,48.17125000000007 54.91424999999903,48.05470000000088 54.38469999999806,47.94374999999998 54.56880000000079,46.892700000000104 54.08055,45.53015000000083 54.17224999999728,44.8637499999997 55.37870000000022,43.76195000000112 55.874299999997376,43.46620000000175 55.70910000000164,43.26704999999971 54.73645000000029,43.6653500000013 54.2481999999995,43.617050000001385 54.075299999998336,43.46899999999965 54.04904999999995,43.28420000000118 54.21810000000089,42.98529999999981 54.42039999999746,42.95590000000192 54.424249999997684,42.81065000000058 54.31154999999872,42.72245000000193 54.38294999999751,42.603099999999856 54.55934999999978,42.514900000001205 54.570900000000464,42.38085000000143 54.438600000001244,42.304200000000975 54.7399500000014,41.76835000000099 55.25514999999881,40.85869999999974 55.53620000000048,40.419449999999586 56.00905000000036,39.85594999999978 56.90049999999782,39.033800000001435 58.13704999999938,37.708699999999624 59.584300000001164,35.92895000000172 60.28464999999865,35.043800000000786 60.983949999998785,34.13240000000147 61.90095000000137,33.26055000000177 62.58589999999795,32.92210000000078 63.29570000000142,32.60360000000165 63.64499999999988,32.02925000000188 62.80745000000063,31.608549999999653 62.737449999998304,30.786049999999705 63.29709999999788,29.99540000000141 63.89804999999764,29.639800000001443 64.75624999999947,29.684950000001848 65.16925000000124,29.86694999999993 65.63474999999978,30.2166 66.82124999999839,29.55405000000158 67.35815000000069,29.423150000001314 68.9642999999992,28.074950000000626 69.4374999999982,27.677000000000646 69.92574999999898,27.497800000000467 70.05349999999974,27.188050000001624 71.20989999999973,25.944150000001216 72.5899499999971,25.12305000000022 76.00420000000152,25.741500000000556 77.58689999999955,27.056450000000638 79.1107999999968,28.6583999999998 79.53814999999716,29.661500000001368 79.99909999999724,30.936200000001108 81.16319999999769,30.8340000000005 81.226900000001,28.991250000000008 81.226900000001,28.991250000000008 86.84894999999693,29.15855000000039 91.65795000000139,31.348150000000558 93.59450000000132,31.035600000001324 93.20809999999705,29.025899999999567 90.25935000000112,27.53140000000019 90.38394999999988,26.58570000000043 91.69119999999702,25.800300000001315 92.11925000000059,24.001299999999787 94.70259999999891,23.310400000000826 97.76264999999734,22.99225000000081 98.64185000000086,25.235750000001673 100.64874999999725,24.649150000000503 100.71909999999869,23.21310000000028 101.65149999999721,22.757400000001866 104.07735000000025,21.548500000000132 112.67825000000067,23.635899999999694 118.89494999999735,22.94570000000145 121.73519999999863,25.922099999999688 124.64649999999958,31.634800000000524 126.60790000000142,30.971900000000502 126.9396999999993,28.382599999999798 128.051299999998,27.098450000001534 127.21900000000042,26.403000000001626 127.07549999999964,22.08680000000139 123.40539999999956,19.470900000000697 123.02774999999806,17.271150000001285 124.33989999999775,15.752150000001592 127.2186500000013,13.638850000000275 125.87779999999947,11.463950000000292 126.00204999999912,10.00515000000031 126.90575000000047,9.335599999999669 127.17979999999991,8.571550000001363 131.55690000000058,10.504250000001061 134.9102499999996,12.377450000001772 138.65524999999957,14.120799999999562 140.0531500000016,15.865550000001278 140.97330000000122,18.862599999999603 142.5815499999994,18.589250000000874 142.96409999999847,17.331350000000995 144.2027499999997,15.913499999999587 143.94654999999995,13.34695000000113 144.42569999999884,11.330249999999634 140.79479999999927,9.305850000000174 136.2234500000016,8.672350000000531 132.44239999999814,4.928749999999507 132.77455000000012,4.400950000001583 135.65994999999683,2.6992500000005997 135.15104999999843,-0.9886999999991737 135.68025000000029,-1.4926999999999886 138.77354999999932,-1.2917999999998848 140.696799999998,-2.660299999999058 154.21344999999698,1.5075000000003307 158.02914999999751,7.160699999999689 161.98799999999972,11.241350000000264 162.6795999999994,11.00370000000093 161.9060999999976,7.065500000001304 162.51614999999924,4.555650000001446 163.83669999999762,2.8697000000004884 161.136450000001,-0.27015000000038825 161.26559999999822,-5.956249999998748 166.36579999999861,-11.92339999999878 155.05135000000033,-8.348150000000656 151.25769999999883,-11.827850000001474 148.58719999999673,-11.723199999999592 147.21939999999827,-13.203000000001264 146.52080000000134,-13.032900000000492 148.27045000000064,-9.282299999999735 148.46294999999708,-7.9687500000010925 147.71569999999863,-7.841000000000333 147.04720000000032,-8.291800000001173 146.88304999999696,-9.53360000000191 145.54360000000153,-10.752300000001282 143.26440000000127,-11.45895000000027 141.314200000001,-11.481000000001798 137.19924999999998,-17.87025000000052 128.14579999999816,-17.7915000000002 122.76699999999985,-15.183299999999964 123.95349999999846,-13.205799999998977 120.72859999999844,-10.192999999998138 118.20334999999767,-7.34084999999955 117.26289999999958,-2.8447499999984167 111.54704999999674,5.140850000001176 110.12710000000064,5.047050000001743 108.60529999999807,2.342949999999913 106.33134999999947,3.491300000000333 106.1972999999997,8.22295000000113 112.30829999999963,16.018849999999702 109.55274999999838,19.25110000000106 101.50030000000095,18.52659999999989 100.23819999999924,20.31580000000129 98.92464999999811,20.44215000000061 97.57259999999968,19.940249999999466 96.47744999999924,17.44999999999986 95.50375000000054,17.745050000001 94.37394999999805,20.575850000001267 90.67269999999704,20.42815000000114 89.50404999999813,18.894800000000373 87.59514999999803,19.661650000001558 85.7639500000007,22.050400000001275 80.96649999999693,21.360900000001266 78.66175000000149,20.11315000000063 75.74099999999954,20.475049999999612 73.06664999999721,22.62229999999977 71.01389999999721,24.68765000000029 68.15054999999954,27.61224999999999 67.30354999999928,28.262200000000377 65.98614999999792,28.69375000000008 65.14614999999988,28.24364999999996 63.6877000000015,28.001100000000562 63.31565000000079,27.513550000000492 63.45145000000112,26.98889999999959 64.60960000000166,25.58855000000125 65.50420000000112,24.991100000000117 66.1387500000006,25.153150000001318 66.24374999999911,24.840599999999597 66.07084999999795,24.66419999999981 66.08589999999974,24.391200000000197 66.53040000000156,23.56870000000025 66.35224999999873,22.709800000000186 66.5310999999998,22.106400000001642 66.91609999999766,21.393450000001152 66.3602999999983,21.074949999999532 65.31274999999705,19.758949999999615 64.82450000000124,19.918200000000425 65.557049999997,20.84885000000088 65.86855000000138,21.5537500000018 65.93889999999784,22.100450000001743 65.86749999999905,23.118250000001012 65.73939999999918,23.577100000001423"
  />

export default WaterOutline;