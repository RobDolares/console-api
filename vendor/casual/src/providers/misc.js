var number = require('./number');

var provider = {
	language_codes: ['cn', 'de', 'en', 'es', 'fr', 'it', 'pt', 'ru'],

	country_codes: ['CA', 'CN', 'DE', 'ES', 'FR', 'IE', 'IN', 'IT', 'MX', 'PT', 'RU', 'GB', 'US'],

	locales: ['aa_DJ', 'aa_ER', 'aa_ET', 'af_NA', 'af_ZA', 'ak_GH', 'am_ET', 'ar_AE', 'ar_BH', 'ar_DZ', 'ar_EG', 'ar_IQ', 'ar_JO', 'ar_KW', 'ar_LB', 'ar_LY', 'ar_MA', 'ar_OM', 'ar_QA', 'ar_SA', 'ar_SD', 'ar_SY', 'ar_TN', 'ar_YE', 'as_IN', 'az_AZ', 'be_BY', 'bg_BG', 'bn_BD', 'bn_IN', 'bo_CN', 'bo_IN', 'bs_BA', 'byn_ER', 'ca_ES', 'cch_NG', 'cs_CZ', 'cy_GB', 'da_DK', 'de_AT', 'de_BE', 'de_CH', 'de_DE', 'de_LI', 'de_LU', 'dv_MV', 'dz_BT', 'ee_GH', 'ee_TG', 'el_CY', 'el_GR', 'en_AS', 'en_AU', 'en_BE', 'en_BW', 'en_BZ', 'en_CA', 'en_GB', 'en_GU', 'en_HK', 'en_IE', 'en_IN', 'en_JM', 'en_MH', 'en_MP', 'en_MT', 'en_NA', 'en_NZ', 'en_PH', 'en_PK', 'en_SG', 'en_TT', 'en_UM', 'en_US', 'en_VI', 'en_ZA', 'en_ZW', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_PY', 'es_SV', 'es_US', 'es_UY', 'es_VE', 'et_EE', 'eu_ES', 'fa_AF', 'fa_IR', 'fi_FI', 'fil_PH', 'fo_FO', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR', 'fr_LU', 'fr_MC', 'fr_SN', 'fur_IT', 'ga_IE', 'gaa_GH', 'gez_ER', 'gez_ET', 'gl_ES', 'gsw_CH', 'gu_IN', 'gv_GB', 'ha_GH', 'ha_NE', 'ha_NG', 'ha_SD', 'haw_US', 'he_IL', 'hi_IN', 'hr_HR', 'hu_HU', 'hy_AM', 'id_ID', 'ig_NG', 'ii_CN', 'is_IS', 'it_CH', 'it_IT', 'ja_JP', 'ka_GE', 'kaj_NG', 'kam_KE', 'kcg_NG', 'kfo_CI', 'kk_KZ', 'kl_GL', 'km_KH', 'kn_IN', 'ko_KR', 'kok_IN', 'kpe_GN', 'kpe_LR', 'ku_IQ', 'ku_IR', 'ku_SY', 'ku_TR', 'kw_GB', 'ky_KG', 'ln_CD', 'ln_CG', 'lo_LA', 'lt_LT', 'lv_LV', 'mk_MK', 'ml_IN', 'mn_CN', 'mn_MN', 'mr_IN', 'ms_BN', 'ms_MY', 'mt_MT', 'my_MM', 'nb_NO', 'nds_DE', 'ne_IN', 'ne_NP', 'nl_BE', 'nl_NL', 'nn_NO', 'nr_ZA', 'nso_ZA', 'ny_MW', 'oc_FR', 'om_ET', 'om_KE', 'or_IN', 'pa_IN', 'pa_PK', 'pl_PL', 'ps_AF', 'pt_BR', 'pt_PT', 'ro_MD', 'ro_RO', 'ru_RU', 'ru_UA', 'rw_RW', 'sa_IN', 'se_FI', 'se_NO', 'sh_BA', 'sh_CS', 'sh_YU', 'si_LK', 'sid_ET', 'sk_SK', 'sl_SI', 'so_DJ', 'so_ET', 'so_KE', 'so_SO', 'sq_AL', 'sr_BA', 'sr_CS', 'sr_ME', 'sr_RS', 'sr_YU', 'ss_SZ', 'ss_ZA', 'st_LS', 'st_ZA', 'sv_FI', 'sv_SE', 'sw_KE', 'sw_TZ', 'syr_SY', 'ta_IN', 'te_IN', 'tg_TJ', 'th_TH', 'ti_ER', 'ti_ET', 'tig_ER', 'tn_ZA', 'to_TO', 'tr_TR', 'trv_TW', 'ts_ZA', 'tt_RU', 'ug_CN', 'uk_UA', 'ur_IN', 'ur_PK', 'uz_AF', 'uz_UZ', 've_ZA', 'vi_VN', 'wal_ET', 'wo_SN', 'xh_ZA', 'yo_NG', 'zh_CN', 'zh_HK', 'zh_MO', 'zh_SG', 'zh_TW', 'zu_ZA'],

	currencies: [{
			symbol: "$",
			name: "US Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "USD",
			name_plural: "US dollars"
		}, {
			symbol: "CA$",
			name: "Canadian Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "CAD",
			name_plural: "Canadian dollars"
		}, {
			symbol: "€",
			name: "Euro",
			symbol_native: "€",
			decimal_digits: 2,
			rounding: 0,
			code: "EUR",
			name_plural: "euros"
		}, {
			symbol: "AED",
			name: "United Arab Emirates Dirham",
			symbol_native: "د.إ.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "AED",
			name_plural: "UAE dirhams"
		}, {
			symbol: "Af",
			name: "Afghan Afghani",
			symbol_native: "؋",
			decimal_digits: 0,
			rounding: 0,
			code: "AFN",
			name_plural: "Afghan Afghanis"
		}, {
			symbol: "ALL",
			name: "Albanian Lek",
			symbol_native: "Lek",
			decimal_digits: 0,
			rounding: 0,
			code: "ALL",
			name_plural: "Albanian lekë"
		}, {
			symbol: "AMD",
			name: "Armenian Dram",
			symbol_native: "դր.",
			decimal_digits: 0,
			rounding: 0,
			code: "AMD",
			name_plural: "Armenian drams"
		}, {
			symbol: "AR$",
			name: "Argentine Peso",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "ARS",
			name_plural: "Argentine pesos"
		}, {
			symbol: "AU$",
			name: "Australian Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "AUD",
			name_plural: "Australian dollars"
		}, {
			symbol: "man.",
			name: "Azerbaijani Manat",
			symbol_native: "ман.",
			decimal_digits: 2,
			rounding: 0,
			code: "AZN",
			name_plural: "Azerbaijani manats"
		}, {
			symbol: "KM",
			name: "Bosnia-Herzegovina Convertible Mark",
			symbol_native: "KM",
			decimal_digits: 2,
			rounding: 0,
			code: "BAM",
			name_plural: "Bosnia-Herzegovina convertible marks"
		}, {
			symbol: "Tk",
			name: "Bangladeshi Taka",
			symbol_native: "৳",
			decimal_digits: 2,
			rounding: 0,
			code: "BDT",
			name_plural: "Bangladeshi takas"
		}, {
			symbol: "BGN",
			name: "Bulgarian Lev",
			symbol_native: "лв.",
			decimal_digits: 2,
			rounding: 0,
			code: "BGN",
			name_plural: "Bulgarian leva"
		}, {
			symbol: "BD",
			name: "Bahraini Dinar",
			symbol_native: "د.ب.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "BHD",
			name_plural: "Bahraini dinars"
		}, {
			symbol: "FBu",
			name: "Burundian Franc",
			symbol_native: "FBu",
			decimal_digits: 0,
			rounding: 0,
			code: "BIF",
			name_plural: "Burundian francs"
		}, {
			symbol: "BN$",
			name: "Brunei Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "BND",
			name_plural: "Brunei dollars"
		}, {
			symbol: "Bs",
			name: "Bolivian Boliviano",
			symbol_native: "Bs",
			decimal_digits: 2,
			rounding: 0,
			code: "BOB",
			name_plural: "Bolivian bolivianos"
		}, {
			symbol: "R$",
			name: "Brazilian Real",
			symbol_native: "R$",
			decimal_digits: 2,
			rounding: 0,
			code: "BRL",
			name_plural: "Brazilian reals"
		}, {
			symbol: "BWP",
			name: "Botswanan Pula",
			symbol_native: "P",
			decimal_digits: 2,
			rounding: 0,
			code: "BWP",
			name_plural: "Botswanan pulas"
		}, {
			symbol: "BYR",
			name: "Belarusian Ruble",
			symbol_native: "BYR",
			decimal_digits: 0,
			rounding: 0,
			code: "BYR",
			name_plural: "Belarusian rubles"
		}, {
			symbol: "BZ$",
			name: "Belize Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "BZD",
			name_plural: "Belize dollars"
		}, {
			symbol: "CDF",
			name: "Congolese Franc",
			symbol_native: "FrCD",
			decimal_digits: 2,
			rounding: 0,
			code: "CDF",
			name_plural: "Congolese francs"
		}, {
			symbol: "CHF",
			name: "Swiss Franc",
			symbol_native: "CHF",
			decimal_digits: 2,
			rounding: 0.05,
			code: "CHF",
			name_plural: "Swiss francs"
		}, {
			symbol: "CL$",
			name: "Chilean Peso",
			symbol_native: "$",
			decimal_digits: 0,
			rounding: 0,
			code: "CLP",
			name_plural: "Chilean pesos"
		}, {
			symbol: "CN¥",
			name: "Chinese Yuan",
			symbol_native: "CN¥",
			decimal_digits: 2,
			rounding: 0,
			code: "CNY",
			name_plural: "Chinese yuan"
		}, {
			symbol: "CO$",
			name: "Colombian Peso",
			symbol_native: "$",
			decimal_digits: 0,
			rounding: 0,
			code: "COP",
			name_plural: "Colombian pesos"
		}, {
			symbol: "₡",
			name: "Costa Rican Colón",
			symbol_native: "₡",
			decimal_digits: 0,
			rounding: 0,
			code: "CRC",
			name_plural: "Costa Rican colóns"
		}, {
			symbol: "CV$",
			name: "Cape Verdean Escudo",
			symbol_native: "CV$",
			decimal_digits: 2,
			rounding: 0,
			code: "CVE",
			name_plural: "Cape Verdean escudos"
		}, {
			symbol: "Kč",
			name: "Czech Republic Koruna",
			symbol_native: "Kč",
			decimal_digits: 2,
			rounding: 0,
			code: "CZK",
			name_plural: "Czech Republic korunas"
		}, {
			symbol: "Fdj",
			name: "Djiboutian Franc",
			symbol_native: "Fdj",
			decimal_digits: 0,
			rounding: 0,
			code: "DJF",
			name_plural: "Djiboutian francs"
		}, {
			symbol: "Dkr",
			name: "Danish Krone",
			symbol_native: "kr",
			decimal_digits: 2,
			rounding: 0,
			code: "DKK",
			name_plural: "Danish kroner"
		}, {
			symbol: "RD$",
			name: "Dominican Peso",
			symbol_native: "RD$",
			decimal_digits: 2,
			rounding: 0,
			code: "DOP",
			name_plural: "Dominican pesos"
		}, {
			symbol: "DA",
			name: "Algerian Dinar",
			symbol_native: "د.ج.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "DZD",
			name_plural: "Algerian dinars"
		}, {
			symbol: "Ekr",
			name: "Estonian Kroon",
			symbol_native: "kr",
			decimal_digits: 2,
			rounding: 0,
			code: "EEK",
			name_plural: "Estonian kroons"
		}, {
			symbol: "EGP",
			name: "Egyptian Pound",
			symbol_native: "ج.م.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "EGP",
			name_plural: "Egyptian pounds"
		}, {
			symbol: "Nfk",
			name: "Eritrean Nakfa",
			symbol_native: "Nfk",
			decimal_digits: 2,
			rounding: 0,
			code: "ERN",
			name_plural: "Eritrean nakfas"
		}, {
			symbol: "Br",
			name: "Ethiopian Birr",
			symbol_native: "Br",
			decimal_digits: 2,
			rounding: 0,
			code: "ETB",
			name_plural: "Ethiopian birrs"
		}, {
			symbol: "£",
			name: "British Pound Sterling",
			symbol_native: "£",
			decimal_digits: 2,
			rounding: 0,
			code: "GBP",
			name_plural: "British pounds sterling"
		}, {
			symbol: "GEL",
			name: "Georgian Lari",
			symbol_native: "GEL",
			decimal_digits: 2,
			rounding: 0,
			code: "GEL",
			name_plural: "Georgian laris"
		}, {
			symbol: "GH₵",
			name: "Ghanaian Cedi",
			symbol_native: "GH₵",
			decimal_digits: 2,
			rounding: 0,
			code: "GHS",
			name_plural: "Ghanaian cedis"
		}, {
			symbol: "FG",
			name: "Guinean Franc",
			symbol_native: "FG",
			decimal_digits: 0,
			rounding: 0,
			code: "GNF",
			name_plural: "Guinean francs"
		}, {
			symbol: "GTQ",
			name: "Guatemalan Quetzal",
			symbol_native: "Q",
			decimal_digits: 2,
			rounding: 0,
			code: "GTQ",
			name_plural: "Guatemalan quetzals"
		}, {
			symbol: "HK$",
			name: "Hong Kong Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "HKD",
			name_plural: "Hong Kong dollars"
		}, {
			symbol: "HNL",
			name: "Honduran Lempira",
			symbol_native: "L",
			decimal_digits: 2,
			rounding: 0,
			code: "HNL",
			name_plural: "Honduran lempiras"
		}, {
			symbol: "kn",
			name: "Croatian Kuna",
			symbol_native: "kn",
			decimal_digits: 2,
			rounding: 0,
			code: "HRK",
			name_plural: "Croatian kunas"
		}, {
			symbol: "Ft",
			name: "Hungarian Forint",
			symbol_native: "Ft",
			decimal_digits: 0,
			rounding: 0,
			code: "HUF",
			name_plural: "Hungarian forints"
		}, {
			symbol: "Rp",
			name: "Indonesian Rupiah",
			symbol_native: "Rp",
			decimal_digits: 0,
			rounding: 0,
			code: "IDR",
			name_plural: "Indonesian rupiahs"
		}, {
			symbol: "₪",
			name: "Israeli New Sheqel",
			symbol_native: "₪",
			decimal_digits: 2,
			rounding: 0,
			code: "ILS",
			name_plural: "Israeli new sheqels"
		}, {
			symbol: "Rs",
			name: "Indian Rupee",
			symbol_native: "টকা",
			decimal_digits: 2,
			rounding: 0,
			code: "INR",
			name_plural: "Indian rupees"
		}, {
			symbol: "IQD",
			name: "Iraqi Dinar",
			symbol_native: "د.ع.‏",
			decimal_digits: 0,
			rounding: 0,
			code: "IQD",
			name_plural: "Iraqi dinars"
		}, {
			symbol: "IRR",
			name: "Iranian Rial",
			symbol_native: "﷼",
			decimal_digits: 0,
			rounding: 0,
			code: "IRR",
			name_plural: "Iranian rials"
		}, {
			symbol: "Ikr",
			name: "Icelandic Króna",
			symbol_native: "kr",
			decimal_digits: 0,
			rounding: 0,
			code: "ISK",
			name_plural: "Icelandic krónur"
		}, {
			symbol: "J$",
			name: "Jamaican Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "JMD",
			name_plural: "Jamaican dollars"
		}, {
			symbol: "JD",
			name: "Jordanian Dinar",
			symbol_native: "د.أ.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "JOD",
			name_plural: "Jordanian dinars"
		}, {
			symbol: "¥",
			name: "Japanese Yen",
			symbol_native: "￥",
			decimal_digits: 0,
			rounding: 0,
			code: "JPY",
			name_plural: "Japanese yen"
		}, {
			symbol: "Ksh",
			name: "Kenyan Shilling",
			symbol_native: "Ksh",
			decimal_digits: 2,
			rounding: 0,
			code: "KES",
			name_plural: "Kenyan shillings"
		}, {
			symbol: "KHR",
			name: "Cambodian Riel",
			symbol_native: "៛",
			decimal_digits: 2,
			rounding: 0,
			code: "KHR",
			name_plural: "Cambodian riels"
		}, {
			symbol: "CF",
			name: "Comorian Franc",
			symbol_native: "FC",
			decimal_digits: 0,
			rounding: 0,
			code: "KMF",
			name_plural: "Comorian francs"
		}, {
			symbol: "₩",
			name: "South Korean Won",
			symbol_native: "₩",
			decimal_digits: 0,
			rounding: 0,
			code: "KRW",
			name_plural: "South Korean won"
		}, {
			symbol: "KD",
			name: "Kuwaiti Dinar",
			symbol_native: "د.ك.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "KWD",
			name_plural: "Kuwaiti dinars"
		}, {
			symbol: "KZT",
			name: "Kazakhstani Tenge",
			symbol_native: "тңг.",
			decimal_digits: 2,
			rounding: 0,
			code: "KZT",
			name_plural: "Kazakhstani tenges"
		}, {
			symbol: "LB£",
			name: "Lebanese Pound",
			symbol_native: "ل.ل.‏",
			decimal_digits: 0,
			rounding: 0,
			code: "LBP",
			name_plural: "Lebanese pounds"
		}, {
			symbol: "SLRs",
			name: "Sri Lankan Rupee",
			symbol_native: "SL Re",
			decimal_digits: 2,
			rounding: 0,
			code: "LKR",
			name_plural: "Sri Lankan rupees"
		}, {
			symbol: "Lt",
			name: "Lithuanian Litas",
			symbol_native: "Lt",
			decimal_digits: 2,
			rounding: 0,
			code: "LTL",
			name_plural: "Lithuanian litai"
		}, {
			symbol: "Ls",
			name: "Latvian Lats",
			symbol_native: "Ls",
			decimal_digits: 2,
			rounding: 0,
			code: "LVL",
			name_plural: "Latvian lati"
		}, {
			symbol: "LD",
			name: "Libyan Dinar",
			symbol_native: "د.ل.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "LYD",
			name_plural: "Libyan dinars"
		}, {
			symbol: "MAD",
			name: "Moroccan Dirham",
			symbol_native: "د.م.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "MAD",
			name_plural: "Moroccan dirhams"
		}, {
			symbol: "MDL",
			name: "Moldovan Leu",
			symbol_native: "MDL",
			decimal_digits: 2,
			rounding: 0,
			code: "MDL",
			name_plural: "Moldovan lei"
		}, {
			symbol: "MGA",
			name: "Malagasy Ariary",
			symbol_native: "MGA",
			decimal_digits: 0,
			rounding: 0,
			code: "MGA",
			name_plural: "Malagasy Ariaries"
		}, {
			symbol: "MKD",
			name: "Macedonian Denar",
			symbol_native: "MKD",
			decimal_digits: 2,
			rounding: 0,
			code: "MKD",
			name_plural: "Macedonian denari"
		}, {
			symbol: "MMK",
			name: "Myanma Kyat",
			symbol_native: "K",
			decimal_digits: 0,
			rounding: 0,
			code: "MMK",
			name_plural: "Myanma kyats"
		}, {
			symbol: "MOP$",
			name: "Macanese Pataca",
			symbol_native: "MOP$",
			decimal_digits: 2,
			rounding: 0,
			code: "MOP",
			name_plural: "Macanese patacas"
		}, {
			symbol: "MURs",
			name: "Mauritian Rupee",
			symbol_native: "MURs",
			decimal_digits: 0,
			rounding: 0,
			code: "MUR",
			name_plural: "Mauritian rupees"
		}, {
			symbol: "MX$",
			name: "Mexican Peso",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "MXN",
			name_plural: "Mexican pesos"
		}, {
			symbol: "RM",
			name: "Malaysian Ringgit",
			symbol_native: "RM",
			decimal_digits: 2,
			rounding: 0,
			code: "MYR",
			name_plural: "Malaysian ringgits"
		}, {
			symbol: "MTn",
			name: "Mozambican Metical",
			symbol_native: "MTn",
			decimal_digits: 2,
			rounding: 0,
			code: "MZN",
			name_plural: "Mozambican meticals"
		}, {
			symbol: "N$",
			name: "Namibian Dollar",
			symbol_native: "N$",
			decimal_digits: 2,
			rounding: 0,
			code: "NAD",
			name_plural: "Namibian dollars"
		}, {
			symbol: "₦",
			name: "Nigerian Naira",
			symbol_native: "₦",
			decimal_digits: 2,
			rounding: 0,
			code: "NGN",
			name_plural: "Nigerian nairas"
		}, {
			symbol: "C$",
			name: "Nicaraguan Córdoba",
			symbol_native: "C$",
			decimal_digits: 2,
			rounding: 0,
			code: "NIO",
			name_plural: "Nicaraguan córdobas"
		}, {
			symbol: "Nkr",
			name: "Norwegian Krone",
			symbol_native: "kr",
			decimal_digits: 2,
			rounding: 0,
			code: "NOK",
			name_plural: "Norwegian kroner"
		}, {
			symbol: "NPRs",
			name: "Nepalese Rupee",
			symbol_native: "नेरू",
			decimal_digits: 2,
			rounding: 0,
			code: "NPR",
			name_plural: "Nepalese rupees"
		}, {
			symbol: "NZ$",
			name: "New Zealand Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "NZD",
			name_plural: "New Zealand dollars"
		}, {
			symbol: "OMR",
			name: "Omani Rial",
			symbol_native: "ر.ع.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "OMR",
			name_plural: "Omani rials"
		}, {
			symbol: "B/.",
			name: "Panamanian Balboa",
			symbol_native: "B/.",
			decimal_digits: 2,
			rounding: 0,
			code: "PAB",
			name_plural: "Panamanian balboas"
		}, {
			symbol: "S/.",
			name: "Peruvian Nuevo Sol",
			symbol_native: "S/.",
			decimal_digits: 2,
			rounding: 0,
			code: "PEN",
			name_plural: "Peruvian nuevos soles"
		}, {
			symbol: "₱",
			name: "Philippine Peso",
			symbol_native: "₱",
			decimal_digits: 2,
			rounding: 0,
			code: "PHP",
			name_plural: "Philippine pesos"
		}, {
			symbol: "PKRs",
			name: "Pakistani Rupee",
			symbol_native: "₨",
			decimal_digits: 0,
			rounding: 0,
			code: "PKR",
			name_plural: "Pakistani rupees"
		}, {
			symbol: "zł",
			name: "Polish Zloty",
			symbol_native: "zł",
			decimal_digits: 2,
			rounding: 0,
			code: "PLN",
			name_plural: "Polish zlotys"
		}, {
			symbol: "₲",
			name: "Paraguayan Guarani",
			symbol_native: "₲",
			decimal_digits: 0,
			rounding: 0,
			code: "PYG",
			name_plural: "Paraguayan guaranis"
		}, {
			symbol: "QR",
			name: "Qatari Rial",
			symbol_native: "ر.ق.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "QAR",
			name_plural: "Qatari rials"
		}, {
			symbol: "RON",
			name: "Romanian Leu",
			symbol_native: "RON",
			decimal_digits: 2,
			rounding: 0,
			code: "RON",
			name_plural: "Romanian lei"
		}, {
			symbol: "din.",
			name: "Serbian Dinar",
			symbol_native: "дин.",
			decimal_digits: 0,
			rounding: 0,
			code: "RSD",
			name_plural: "Serbian dinars"
		}, {
			symbol: "RUB",
			name: "Russian Ruble",
			symbol_native: "руб.",
			decimal_digits: 2,
			rounding: 0,
			code: "RUB",
			name_plural: "Russian rubles"
		}, {
			symbol: "RWF",
			name: "Rwandan Franc",
			symbol_native: "FR",
			decimal_digits: 0,
			rounding: 0,
			code: "RWF",
			name_plural: "Rwandan francs"
		}, {
			symbol: "SR",
			name: "Saudi Riyal",
			symbol_native: "ر.س.‏",
			decimal_digits: 2,
			rounding: 0,
			code: "SAR",
			name_plural: "Saudi riyals"
		}, {
			symbol: "SDG",
			name: "Sudanese Pound",
			symbol_native: "SDG",
			decimal_digits: 2,
			rounding: 0,
			code: "SDG",
			name_plural: "Sudanese pounds"
		}, {
			symbol: "Skr",
			name: "Swedish Krona",
			symbol_native: "kr",
			decimal_digits: 2,
			rounding: 0,
			code: "SEK",
			name_plural: "Swedish kronor"
		}, {
			symbol: "S$",
			name: "Singapore Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "SGD",
			name_plural: "Singapore dollars"
		}, {
			symbol: "Ssh",
			name: "Somali Shilling",
			symbol_native: "Ssh",
			decimal_digits: 0,
			rounding: 0,
			code: "SOS",
			name_plural: "Somali shillings"
		}, {
			symbol: "SY£",
			name: "Syrian Pound",
			symbol_native: "ل.س.‏",
			decimal_digits: 0,
			rounding: 0,
			code: "SYP",
			name_plural: "Syrian pounds"
		}, {
			symbol: "฿",
			name: "Thai Baht",
			symbol_native: "฿",
			decimal_digits: 2,
			rounding: 0,
			code: "THB",
			name_plural: "Thai baht"
		}, {
			symbol: "DT",
			name: "Tunisian Dinar",
			symbol_native: "د.ت.‏",
			decimal_digits: 3,
			rounding: 0,
			code: "TND",
			name_plural: "Tunisian dinars"
		}, {
			symbol: "T$",
			name: "Tongan Paʻanga",
			symbol_native: "T$",
			decimal_digits: 2,
			rounding: 0,
			code: "TOP",
			name_plural: "Tongan paʻanga"
		}, {
			symbol: "TL",
			name: "Turkish Lira",
			symbol_native: "TL",
			decimal_digits: 2,
			rounding: 0,
			code: "TRY",
			name_plural: "Turkish Lira"
		}, {
			symbol: "TT$",
			name: "Trinidad and Tobago Dollar",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "TTD",
			name_plural: "Trinidad and Tobago dollars"
		}, {
			symbol: "NT$",
			name: "New Taiwan Dollar",
			symbol_native: "NT$",
			decimal_digits: 2,
			rounding: 0,
			code: "TWD",
			name_plural: "New Taiwan dollars"
		}, {
			symbol: "TSh",
			name: "Tanzanian Shilling",
			symbol_native: "TSh",
			decimal_digits: 0,
			rounding: 0,
			code: "TZS",
			name_plural: "Tanzanian shillings"
		}, {
			symbol: "₴",
			name: "Ukrainian Hryvnia",
			symbol_native: "₴",
			decimal_digits: 2,
			rounding: 0,
			code: "UAH",
			name_plural: "Ukrainian hryvnias"
		}, {
			symbol: "USh",
			name: "Ugandan Shilling",
			symbol_native: "USh",
			decimal_digits: 0,
			rounding: 0,
			code: "UGX",
			name_plural: "Ugandan shillings"
		}, {
			symbol: "$U",
			name: "Uruguayan Peso",
			symbol_native: "$",
			decimal_digits: 2,
			rounding: 0,
			code: "UYU",
			name_plural: "Uruguayan pesos"
		}, {
			symbol: "UZS",
			name: "Uzbekistan Som",
			symbol_native: "UZS",
			decimal_digits: 0,
			rounding: 0,
			code: "UZS",
			name_plural: "Uzbekistan som"
		}, {
			symbol: "Bs.F.",
			name: "Venezuelan Bolívar",
			symbol_native: "Bs.F.",
			decimal_digits: 2,
			rounding: 0,
			code: "VEF",
			name_plural: "Venezuelan bolívars"
		}, {
			symbol: "₫",
			name: "Vietnamese Dong",
			symbol_native: "₫",
			decimal_digits: 0,
			rounding: 0,
			code: "VND",
			name_plural: "Vietnamese dong"
		}, {
			symbol: "FCFA",
			name: "CFA Franc BEAC",
			symbol_native: "FCFA",
			decimal_digits: 0,
			rounding: 0,
			code: "XAF",
			name_plural: "CFA francs BEAC"
		}, {
			symbol: "CFA",
			name: "CFA Franc BCEAO",
			symbol_native: "CFA",
			decimal_digits: 0,
			rounding: 0,
			code: "XOF",
			name_plural: "CFA francs BCEAO"
		}, {
			symbol: "YR",
			name: "Yemeni Rial",
			symbol_native: "ر.ي.‏",
			decimal_digits: 0,
			rounding: 0,
			code: "YER",
			name_plural: "Yemeni rials"
		}, {
			symbol: "R",
			name: "South African Rand",
			symbol_native: "R",
			decimal_digits: 2,
			rounding: 0,
			code: "ZAR",
			name_plural: "South African rand"
		}, {
			symbol: "ZK",
			name: "Zambian Kwacha",
			symbol_native: "ZK",
			decimal_digits: 0,
			rounding: 0,
			code: "ZMK",
			name_plural: "Zambian kwachas"
		}],
	/**
	 * MIME types from the apache.org file. Some types are truncated.
	 *
	 * @link http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
	 */
	mime_types: {
		'application/atom+xml': 'atom',
		'application/ecmascript': 'ecma',
		'application/emma+xml': 'emma',
		'application/epub+zip': 'epub',
		'application/java-archive': 'jar',
		'application/java-vm': 'class',
		'application/javascript': 'js',
		'application/json': 'json',
		'application/jsonml+json': 'jsonml',
		'application/lost+xml': 'lostxml',
		'application/mathml+xml': 'mathml',
		'application/mets+xml': 'mets',
		'application/mods+xml': 'mods',
		'application/mp4': 'mp4s',
		'application/msword': ['doc', 'dot'],
		'application/octet-stream': [
			'bin',
			'dms',
			'lrf',
			'mar',
			'so',
			'dist',
			'distz',
			'pkg',
			'bpk',
			'dump',
			'elc',
			'deploy'
		],
		'application/ogg': 'ogx',
		'application/omdoc+xml': 'omdoc',
		'application/pdf': 'pdf',
		'application/pgp-encrypted': 'pgp',
		'application/pgp-signature': ['asc', 'sig'],
		'application/pkix-pkipath': 'pkipath',
		'application/pkixcmp': 'pki',
		'application/pls+xml': 'pls',
		'application/postscript': ['ai', 'eps', 'ps'],
		'application/pskc+xml': 'pskcxml',
		'application/rdf+xml': 'rdf',
		'application/reginfo+xml': 'rif',
		'application/rss+xml': 'rss',
		'application/rtf': 'rtf',
		'application/sbml+xml': 'sbml',
		'application/vnd.adobe.air-application-installer-package+zip': 'air',
		'application/vnd.adobe.xdp+xml': 'xdp',
		'application/vnd.adobe.xfdf': 'xfdf',
		'application/vnd.ahead.space': 'ahead',
		'application/vnd.dart': 'dart',
		'application/vnd.data-vision.rdz': 'rdz',
		'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
		'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
		'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
		'application/vnd.dece.zip': ['uvz', 'uvvz'],
		'application/vnd.denovo.fcselayout-link': 'fe_launch',
		'application/vnd.dna': 'dna',
		'application/vnd.dolby.mlp': 'mlp',
		'application/vnd.dpgraph': 'dpg',
		'application/vnd.dreamfactory': 'dfac',
		'application/vnd.ds-keypoint': 'kpxx',
		'application/vnd.dvb.ait': 'ait',
		'application/vnd.dvb.service': 'svc',
		'application/vnd.dynageo': 'geo',
		'application/vnd.ecowin.chart': 'mag',
		'application/vnd.enliven': 'nml',
		'application/vnd.epson.esf': 'esf',
		'application/vnd.epson.msf': 'msf',
		'application/vnd.epson.quickanime': 'qam',
		'application/vnd.epson.salt': 'slt',
		'application/vnd.epson.ssf': 'ssf',
		'application/vnd.ezpix-album': 'ez2',
		'application/vnd.ezpix-package': 'ez3',
		'application/vnd.fdf': 'fdf',
		'application/vnd.fdsn.mseed': 'mseed',
		'application/vnd.fdsn.seed': ['seed', 'dataless'],
		'application/vnd.flographit': 'gph',
		'application/vnd.fluxtime.clip': 'ftc',
		'application/vnd.hal+xml': 'hal',
		'application/vnd.hydrostatix.sof-data': 'sfd-hdstx',
		'application/vnd.ibm.minipay': 'mpy',
		'application/vnd.ibm.secure-container': 'sc',
		'application/vnd.iccprofile': ['icc', 'icm'],
		'application/vnd.igloader': 'igl',
		'application/vnd.immervision-ivp': 'ivp',
		'application/vnd.kde.karbon': 'karbon',
		'application/vnd.kde.kchart': 'chrt',
		'application/vnd.kde.kformula': 'kfo',
		'application/vnd.kde.kivio': 'flw',
		'application/vnd.kde.kontour': 'kon',
		'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
		'application/vnd.kde.kspread': 'ksp',
		'application/vnd.kde.kword': ['kwd', 'kwt'],
		'application/vnd.kenameaapp': 'htke',
		'application/vnd.kidspiration': 'kia',
		'application/vnd.kinar': ['kne', 'knp'],
		'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
		'application/vnd.kodak-descriptor': 'sse',
		'application/vnd.las.las+xml': 'lasxml',
		'application/vnd.llamagraphics.life-balance.desktop': 'lbd',
		'application/vnd.llamagraphics.life-balance.exchange+xml': 'lbe',
		'application/vnd.lotus-1-2-3': '123',
		'application/vnd.lotus-approach': 'apr',
		'application/vnd.lotus-freelance': 'pre',
		'application/vnd.lotus-notes': 'nsf',
		'application/vnd.lotus-organizer': 'org',
		'application/vnd.lotus-screencam': 'scm',
		'application/vnd.mozilla.xul+xml': 'xul',
		'application/vnd.ms-artgalry': 'cil',
		'application/vnd.ms-cab-compressed': 'cab',
		'application/vnd.ms-excel': [
			'xls',
			'xlm',
			'xla',
			'xlc',
			'xlt',
			'xlw'
		],
		'application/vnd.ms-excel.addin.macroenabled.12': 'xlam',
		'application/vnd.ms-excel.sheet.binary.macroenabled.12': 'xlsb',
		'application/vnd.ms-excel.sheet.macroenabled.12': 'xlsm',
		'application/vnd.ms-excel.template.macroenabled.12': 'xltm',
		'application/vnd.ms-fontobject': 'eot',
		'application/vnd.ms-htmlhelp': 'chm',
		'application/vnd.ms-ims': 'ims',
		'application/vnd.ms-lrm': 'lrm',
		'application/vnd.ms-officetheme': 'thmx',
		'application/vnd.ms-pki.seccat': 'cat',
		'application/vnd.ms-pki.stl': 'stl',
		'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
		'application/vnd.ms-powerpoint.addin.macroenabled.12': 'ppam',
		'application/vnd.ms-powerpoint.presentation.macroenabled.12': 'pptm',
		'application/vnd.ms-powerpoint.slide.macroenabled.12': 'sldm',
		'application/vnd.ms-powerpoint.slideshow.macroenabled.12': 'ppsm',
		'application/vnd.ms-powerpoint.template.macroenabled.12': 'potm',
		'application/vnd.ms-project': ['mpp', 'mpt'],
		'application/vnd.ms-word.document.macroenabled.12': 'docm',
		'application/vnd.ms-word.template.macroenabled.12': 'dotm',
		'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
		'application/vnd.ms-wpl': 'wpl',
		'application/vnd.ms-xpsdocument': 'xps',
		'application/vnd.mseq': 'mseq',
		'application/vnd.musician': 'mus',
		'application/vnd.oasis.opendocument.chart': 'odc',
		'application/vnd.oasis.opendocument.chart-template': 'otc',
		'application/vnd.oasis.opendocument.database': 'odb',
		'application/vnd.oasis.opendocument.formula': 'odf',
		'application/vnd.oasis.opendocument.formula-template': 'odft',
		'application/vnd.oasis.opendocument.graphics': 'odg',
		'application/vnd.oasis.opendocument.graphics-template': 'otg',
		'application/vnd.oasis.opendocument.image': 'odi',
		'application/vnd.oasis.opendocument.image-template': 'oti',
		'application/vnd.oasis.opendocument.presentation': 'odp',
		'application/vnd.oasis.opendocument.presentation-template': 'otp',
		'application/vnd.oasis.opendocument.spreadsheet': 'ods',
		'application/vnd.oasis.opendocument.spreadsheet-template': 'ots',
		'application/vnd.oasis.opendocument.text': 'odt',
		'application/vnd.oasis.opendocument.text-master': 'odm',
		'application/vnd.oasis.opendocument.text-template': 'ott',
		'application/vnd.oasis.opendocument.text-web': 'oth',
		'application/vnd.olpc-sugar': 'xo',
		'application/vnd.oma.dd2+xml': 'dd2',
		'application/vnd.openofficeorg.extension': 'oxt',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
		'application/vnd.openxmlformats-officedocument.presentationml.slide': 'sldx',
		'application/vnd.openxmlformats-officedocument.presentationml.slideshow': 'ppsx',
		'application/vnd.openxmlformats-officedocument.presentationml.template': 'potx',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.template': 'xltx',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.template': 'dotx',
		'application/vnd.pvi.ptid1': 'ptid',
		'application/vnd.quark.quarkxpress': [
			'qxd',
			'qxt',
			'qwd',
			'qwt',
			'qxl',
			'qxb'
		],
		'application/vnd.realvnc.bed': 'bed',
		'application/vnd.recordare.musicxml': 'mxl',
		'application/vnd.recordare.musicxml+xml': 'musicxml',
		'application/vnd.rig.cryptonote': 'cryptonote',
		'application/vnd.rim.cod': 'cod',
		'application/vnd.rn-realmedia': 'rm',
		'application/vnd.rn-realmedia-vbr': 'rmvb',
		'application/vnd.route66.link66+xml': 'link66',
		'application/vnd.sailingtracker.track': 'st',
		'application/vnd.seemail': 'see',
		'application/vnd.sema': 'sema',
		'application/vnd.semd': 'semd',
		'application/vnd.semf': 'semf',
		'application/vnd.shana.informed.formdata': 'ifm',
		'application/vnd.shana.informed.formtemplate': 'itp',
		'application/vnd.shana.informed.interchange': 'iif',
		'application/vnd.shana.informed.package': 'ipk',
		'application/vnd.simtech-mindmapper': ['twd', 'twds'],
		'application/vnd.smaf': 'mmf',
		'application/vnd.stepmania.stepchart': 'sm',
		'application/vnd.sun.xml.calc': 'sxc',
		'application/vnd.sun.xml.calc.template': 'stc',
		'application/vnd.sun.xml.draw': 'sxd',
		'application/vnd.sun.xml.draw.template': 'std',
		'application/vnd.sun.xml.impress': 'sxi',
		'application/vnd.sun.xml.impress.template': 'sti',
		'application/vnd.sun.xml.math': 'sxm',
		'application/vnd.sun.xml.writer': 'sxw',
		'application/vnd.sun.xml.writer.global': 'sxg',
		'application/vnd.sun.xml.writer.template': 'stw',
		'application/vnd.sus-calendar': ['sus', 'susp'],
		'application/vnd.svd': 'svd',
		'application/vnd.symbian.install': ['sis', 'sisx'],
		'application/vnd.syncml+xml': 'xsm',
		'application/vnd.syncml.dm+wbxml': 'bdm',
		'application/vnd.syncml.dm+xml': 'xdm',
		'application/vnd.tao.intent-module-archive': 'tao',
		'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
		'application/vnd.tmobile-livetv': 'tmo',
		'application/vnd.trid.tpt': 'tpt',
		'application/vnd.triscape.mxs': 'mxs',
		'application/vnd.trueapp': 'tra',
		'application/vnd.ufdl': ['ufd', 'ufdl'],
		'application/vnd.uiq.theme': 'utz',
		'application/vnd.umajin': 'umj',
		'application/vnd.unity': 'unityweb',
		'application/vnd.uoml+xml': 'uoml',
		'application/vnd.vcx': 'vcx',
		'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
		'application/vnd.visionary': 'vis',
		'application/vnd.vsf': 'vsf',
		'application/vnd.wap.wbxml': 'wbxml',
		'application/vnd.wap.wmlc': 'wmlc',
		'application/vnd.wap.wmlscriptc': 'wmlsc',
		'application/vnd.webturbo': 'wtb',
		'application/vnd.wolfram.player': 'nbp',
		'application/vnd.wordperfect': 'wpd',
		'application/vnd.wqd': 'wqd',
		'application/vnd.wt.stf': 'stf',
		'application/vnd.xara': 'xar',
		'application/vnd.xfdl': 'xfdl',
		'application/voicexml+xml': 'vxml',
		'application/widget': 'wgt',
		'application/winhlp': 'hlp',
		'application/wsdl+xml': 'wsdl',
		'application/wspolicy+xml': 'wspolicy',
		'application/x-7z-compressed': '7z',
		'application/x-bittorrent': 'torrent',
		'application/x-blorb': ['blb', 'blorb'],
		'application/x-bzip': 'bz',
		'application/x-cdlink': 'vcd',
		'application/x-cfs-compressed': 'cfs',
		'application/x-chat': 'chat',
		'application/x-chess-pgn': 'pgn',
		'application/x-conference': 'nsc',
		'application/x-cpio': 'cpio',
		'application/x-csh': 'csh',
		'application/x-debian-package': ['deb', 'udeb'],
		'application/x-dgc-compressed': 'dgc',
		'application/x-director': [
			'dir',
			'dcr',
			'dxr',
			'cst',
			'cct',
			'cxt',
			'w3d',
			'fgd',
			'swa'
		],
		'application/x-font-ttf': ['ttf', 'ttc'],
		'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
		'application/x-font-woff': 'woff',
		'application/x-freearc': 'arc',
		'application/x-futuresplash': 'spl',
		'application/x-gca-compressed': 'gca',
		'application/x-glulx': 'ulx',
		'application/x-gnumeric': 'gnumeric',
		'application/x-gramps-xml': 'gramps',
		'application/x-gtar': 'gtar',
		'application/x-hdf': 'hdf',
		'application/x-install-instructions': 'install',
		'application/x-iso9660-image': 'iso',
		'application/x-java-jnlp-file': 'jnlp',
		'application/x-latex': 'latex',
		'application/x-lzh-compressed': ['lzh', 'lha'],
		'application/x-mie': 'mie',
		'application/x-mobipocket-ebook': ['prc', 'mobi'],
		'application/x-ms-application': 'application',
		'application/x-ms-shortcut': 'lnk',
		'application/x-ms-wmd': 'wmd',
		'application/x-ms-wmz': 'wmz',
		'application/x-ms-xbap': 'xbap',
		'application/x-msaccess': 'mdb',
		'application/x-msbinder': 'obd',
		'application/x-mscardfile': 'crd',
		'application/x-msclip': 'clp',
		'application/x-msdownload': ['exe', 'dll', 'com', 'bat', 'msi'],
		'application/x-msmediaview': [
			'mvb',
			'm13',
			'm14'
		],
		'application/x-msmetafile': ['wmf', 'wmz', 'emf', 'emz'],
		'application/x-rar-compressed': 'rar',
		'application/x-research-info-systems': 'ris',
		'application/x-sh': 'sh',
		'application/x-shar': 'shar',
		'application/x-shockwave-flash': 'swf',
		'application/x-silverlight-app': 'xap',
		'application/x-sql': 'sql',
		'application/x-stuffit': 'sit',
		'application/x-stuffitx': 'sitx',
		'application/x-subrip': 'srt',
		'application/x-sv4cpio': 'sv4cpio',
		'application/x-sv4crc': 'sv4crc',
		'application/x-t3vm-image': 't3',
		'application/x-tads': 'gam',
		'application/x-tar': 'tar',
		'application/x-tcl': 'tcl',
		'application/x-tex': 'tex',
		'application/x-tex-tfm': 'tfm',
		'application/x-texinfo': ['texinfo', 'texi'],
		'application/x-tgif': 'obj',
		'application/x-ustar': 'ustar',
		'application/x-wais-source': 'src',
		'application/x-x509-ca-cert': ['der', 'crt'],
		'application/x-xfig': 'fig',
		'application/x-xliff+xml': 'xlf',
		'application/x-xpinstall': 'xpi',
		'application/x-xz': 'xz',
		'application/x-zmachine': 'z1',
		'application/xaml+xml': 'xaml',
		'application/xcap-diff+xml': 'xdf',
		'application/xenc+xml': 'xenc',
		'application/xhtml+xml': ['xhtml', 'xht'],
		'application/xml': ['xml', 'xsl'],
		'application/xml-dtd': 'dtd',
		'application/xop+xml': 'xop',
		'application/xproc+xml': 'xpl',
		'application/xslt+xml': 'xslt',
		'application/xspf+xml': 'xspf',
		'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
		'application/yang': 'yang',
		'application/yin+xml': 'yin',
		'application/zip': 'zip',
		'audio/adpcm': 'adp',
		'audio/basic': ['au', 'snd'],
		'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
		'audio/mp4': 'mp4a',
		'audio/mpeg': [
			'mpga',
			'mp2',
			'mp2a',
			'mp3',
			'm2a',
			'm3a'
		],
		'audio/ogg': ['oga', 'ogg', 'spx'],
		'audio/vnd.dece.audio': ['uva', 'uvva'],
		'audio/vnd.rip': 'rip',
		'audio/webm': 'weba',
		'audio/x-aac': 'aac',
		'audio/x-aiff': ['aif', 'aiff', 'aifc'],
		'audio/x-caf': 'caf',
		'audio/x-flac': 'flac',
		'audio/x-matroska': 'mka',
		'audio/x-mpegurl': 'm3u',
		'audio/x-ms-wax': 'wax',
		'audio/x-ms-wma': 'wma',
		'audio/x-pn-realaudio': ['ram', 'ra'],
		'audio/x-pn-realaudio-plugin': 'rmp',
		'audio/x-wav': 'wav',
		'audio/xm': 'xm',
		'image/bmp': 'bmp',
		'image/cgm': 'cgm',
		'image/g3fax': 'g3',
		'image/gif': 'gif',
		'image/ief': 'ief',
		'image/jpeg': ['jpeg', 'jpg', 'jpe'],
		'image/ktx': 'ktx',
		'image/png': 'png',
		'image/prs.btif': 'btif',
		'image/sgi': 'sgi',
		'image/svg+xml': ['svg', 'svgz'],
		'image/tiff': ['tiff', 'tif'],
		'image/vnd.adobe.photoshop': 'psd',
		'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
		'image/vnd.dvb.subtitle': 'sub',
		'image/vnd.djvu': ['djvu', 'djv'],
		'image/vnd.dwg': 'dwg',
		'image/vnd.dxf': 'dxf',
		'image/vnd.fastbidsheet': 'fbs',
		'image/vnd.fpx': 'fpx',
		'image/vnd.fst': 'fst',
		'image/vnd.fujixerox.edmics-mmr': 'mmr',
		'image/vnd.fujixerox.edmics-rlc': 'rlc',
		'image/vnd.ms-modi': 'mdi',
		'image/vnd.ms-photo': 'wdp',
		'image/vnd.net-fpx': 'npx',
		'image/vnd.wap.wbmp': 'wbmp',
		'image/vnd.xiff': 'xif',
		'image/webp': 'webp',
		'image/x-3ds': '3ds',
		'image/x-cmu-raster': 'ras',
		'image/x-cmx': 'cmx',
		'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
		'image/x-icon': 'ico',
		'image/x-mrsid-image': 'sid',
		'image/x-pcx': 'pcx',
		'image/x-pict': ['pic', 'pct'],
		'image/x-portable-anymap': 'pnm',
		'image/x-portable-bitmap': 'pbm',
		'image/x-portable-graymap': 'pgm',
		'image/x-portable-pixmap': 'ppm',
		'image/x-rgb': 'rgb',
		'image/x-tga': 'tga',
		'image/x-xbitmap': 'xbm',
		'image/x-xpixmap': 'xpm',
		'image/x-xwindowdump': 'xwd',
		'message/rfc822': ['eml', 'mime'],
		'model/iges': ['igs', 'iges'],
		'model/mesh': ['msh', 'mesh', 'silo'],
		'model/vnd.collada+xml': 'dae',
		'model/vnd.dwf': 'dwf',
		'model/vnd.gdl': 'gdl',
		'model/vnd.gtw': 'gtw',
		'model/vnd.mts': 'mts',
		'model/vnd.vtu': 'vtu',
		'model/vrml': ['wrl', 'vrml'],
		'model/x3d+binary': 'x3db',
		'model/x3d+vrml': 'x3dv',
		'model/x3d+xml': 'x3d',
		'text/cache-manifest': 'appcache',
		'text/calendar': ['ics', 'ifb'],
		'text/css': 'css',
		'text/csv': 'csv',
		'text/html': ['html', 'htm'],
		'text/n3': 'n3',
		'text/plain': [
			'txt',
			'text',
			'conf',
			'def',
			'list',
			'log',
			'in'
		],
		'text/prs.lines.tag': 'dsc',
		'text/richtext': 'rtx',
		'text/sgml': ['sgml', 'sgm'],
		'text/tab-separated-values': 'tsv',
		'text/troff': [
			't',
			'tr',
			'roff',
			'man',
			'me',
			'ms'
		],
		'text/turtle': 'ttl',
		'text/uri-list': ['uri', 'uris', 'urls'],
		'text/vcard': 'vcard',
		'text/vnd.curl': 'curl',
		'text/vnd.curl.dcurl': 'dcurl',
		'text/vnd.curl.scurl': 'scurl',
		'text/vnd.curl.mcurl': 'mcurl',
		'text/vnd.dvb.subtitle': 'sub',
		'text/vnd.fly': 'fly',
		'text/vnd.fmi.flexstor': 'flx',
		'text/vnd.graphviz': 'gv',
		'text/vnd.in3d.3dml': '3dml',
		'text/vnd.in3d.spot': 'spot',
		'text/vnd.sun.j2me.app-descriptor': 'jad',
		'text/vnd.wap.wml': 'wml',
		'text/vnd.wap.wmlscript': 'wmls',
		'text/x-asm': ['s', 'asm'],
		'text/x-fortran': ['f', 'for', 'f77', 'f90'],
		'text/x-java-source': 'java',
		'text/x-opml': 'opml',
		'text/x-pascal': ['p', 'pas'],
		'text/x-nfo': 'nfo',
		'text/x-setext': 'etx',
		'text/x-sfv': 'sfv',
		'text/x-uuencode': 'uu',
		'text/x-vcalendar': 'vcs',
		'text/x-vcard': 'vcf',
		'video/3gpp': '3gp',
		'video/3gpp2': '3g2',
		'video/h261': 'h261',
		'video/h263': 'h263',
		'video/h264': 'h264',
		'video/jpeg': 'jpgv',
		'video/jpm': ['jpm', 'jpgm'],
		'video/mj2': 'mj2',
		'video/mp4': 'mp4',
		'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
		'video/ogg': 'ogv',
		'video/quicktime': ['qt', 'mov'],
		'video/vnd.dece.hd': ['uvh', 'uvvh'],
		'video/vnd.dece.mobile': ['uvm', 'uvvm'],
		'video/vnd.dece.pd': ['uvp', 'uvvp'],
		'video/vnd.dece.sd': ['uvs', 'uvvs'],
		'video/vnd.dece.video': ['uvv', 'uvvv'],
		'video/vnd.dvb.file': 'dvb',
		'video/vnd.fvt': 'fvt',
		'video/vnd.mpegurl': ['mxu', 'm4u'],
		'video/vnd.ms-playready.media.pyv': 'pyv',
		'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
		'video/vnd.vivo': 'viv',
		'video/webm': 'webm',
		'video/x-f4v': 'f4v',
		'video/x-fli': 'fli',
		'video/x-flv': 'flv',
		'video/x-m4v': 'm4v',
		'video/x-matroska': ['mkv', 'mk3d', 'mks'],
		'video/x-mng': 'mng',
		'video/x-ms-asf': ['asf', 'asx'],
		'video/x-ms-vob': 'vob',
		'video/x-ms-wm': 'wm',
		'video/x-ms-wmv': 'wmv',
		'video/x-ms-wmx': 'wmx',
		'video/x-ms-wvx': 'wvx',
		'video/x-msvideo': 'avi',
		'video/x-sgi-movie': 'movie'
	},

	locale: function() {
		return this.random_element(this.locales);
	},

	country_code: function() {
		return this.random_element(this.country_codes);
	},

	language_code: function() {
		return this.random_element(this.language_codes);
	},

	currency: function() {
		return this.random_element(this.currencies);
	},

	currency_code: function() {
		return this.random_element(this.currencies).code;
	},

	currency_symbol: function() {
		return this.random_element(this.currencies).symbol;
	},

	currency_name: function() {
		return this.random_element(this.currencies).name;
	},

	mime_type: function() {
		return this.random_key(this.mime_types);
	},

	file_extension: function() {
		var ext = this.random_value(this.mime_types);
		return typeof ext === 'string' ? ext : this.random_element(ext);
	},

	boolean: function() {
		return this.coin_flip;
	},

	uuid: function() {
 		return (b = function (_b) {
			function b(_x) {
				return _b.apply(this, arguments);
			}
			b.toString = function () {
				return _b.toString();
 			};
			return b;
		}(function (a) {
			return a ? (a ^ number.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
		}))();
	}
};

module.exports = provider;