export default function Icons({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  if (name === "react") {
    return (
      <svg {...props} height="228" preserveAspectRatio="xMidYMid" viewBox="0 0 256 228" width="256" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m210.483381 73.8236374c-2.655683-.9140871-5.407514-1.7789613-8.240911-2.5969006.465702-1.900627.893126-3.7766474 1.273161-5.6207704 6.238212-30.2810742 2.159451-54.6757186-11.768303-62.70747357-13.354969-7.70138944-35.196001.32854284-57.254392 19.52528477-2.121175 1.8459457-4.248274 3.8003425-6.374459 5.8486085-1.4167-1.3551821-2.831119-2.6647964-4.241893-3.9174513-23.117839-20.52640617-46.2899038-29.17651417-60.2039874-21.12151965-13.3422097 7.72371765-17.293381 30.65700725-11.6780788 59.35460545.5422551 2.7718805 1.1761011 5.6025433 1.8928804 8.4805964-3.2795041.9309471-6.4455448 1.9234107-9.4748826 2.9792133-27.1031859 9.4493647-44.4125156 24.2588525-44.4125156 39.6201647 0 15.865292 18.5815786 31.778428 46.8116526 41.427378 2.2278027.761436 4.5394499 1.481405 6.921727 2.16492-.7732831 3.112727-1.4458617 6.163025-2.0104451 9.138138-5.3541994 28.199544-1.1729114 50.591033 12.1337554 58.265994 13.744572 7.926039 36.8118301-.221003 59.2734951-19.855194 1.775316-1.552035 3.557011-3.197938 5.341896-4.923129 2.313471 2.227802 4.623294 4.336217 6.920816 6.313853 21.756733 18.722383 43.245072 26.282514 56.539435 18.586137 13.730902-7.948824 18.193343-32.002622 12.39987-61.267992-.442462-2.235094-.957376-4.51849-1.535629-6.842439 1.61993-.478918 3.210241-.973326 4.760909-1.487329 29.347849-9.723682 48.442518-25.443157 48.442518-41.520337 0-15.4169044-17.867534-30.3261857-45.516619-39.8443576zm-6.365346 70.9839276c-1.399838.463422-2.836131.911353-4.299764 1.345612-3.23986-10.256823-7.612532-21.163442-12.963542-32.431867 5.106312-11.000033 9.309927-21.7672137 12.459108-31.9575086 2.618773.7577901 5.160537 1.5570469 7.609799 2.4005042 23.689712 8.1552432 38.140127 20.2129004 38.140127 29.5036894 0 9.896384-15.60601 22.743273-40.945728 31.13957zm-10.514281 20.834442c2.561813 12.940759 2.927721 24.64071 1.230782 33.78705-1.524693 8.218583-4.590941 13.698093-8.38217 15.892632-8.067754 4.669773-25.320578-1.400294-43.92722-17.411857-2.133022-1.835466-4.281537-3.79533-6.436887-5.869571 7.21336-7.889128 14.422619-17.060529 21.458721-27.246268 12.375719-1.098179 24.067925-2.893546 34.671062-5.34463.522205 2.106593.986084 4.17263 1.385712 6.192644zm-106.3275674 48.872679c-7.8822932 2.783728-14.1601491 2.863471-17.9550235.675312-8.0750442-4.65747-11.4320133-22.635733-6.8529197-46.751959.5244838-2.761856 1.1487607-5.598897 1.8682739-8.498823 10.4869402 2.318938 22.0934778 3.987625 34.4988161 4.993303 7.0834926 9.967015 14.5009956 19.128391 21.9759136 27.150121-1.633145 1.57664-3.259911 3.07764-4.877562 4.492059-9.932382 8.682006-19.8857245 14.841841-28.6574984 17.939987zm-36.9275725-69.767727c-12.4828036-4.266499-22.7915743-9.811627-29.8577507-15.862556-6.349397-5.437588-9.5550817-10.835988-9.5550817-15.216408 0-9.321775 13.8976794-21.2117433 37.0765787-29.2931669 2.8124357-.980616 5.7565619-1.904728 8.8118733-2.7727918 3.2034061 10.4204114 7.4056553 21.3151817 12.4768798 32.3320737-5.1368419 11.18048-9.3987847 22.248865-12.6336326 32.791396-2.1781339-.626099-4.288372-1.285007-6.3188668-1.978547zm12.3784537-84.2591517c-4.8110332-24.5873955-1.6158291-43.1352541 6.4245837-47.7895344 8.5644409-4.95821666 27.5028138 2.1111493 47.4632705 19.834689 1.275894 1.132812 2.556801 2.3184823 3.841353 3.5451637-7.438008 7.986643-14.787615 17.079213-21.8082236 26.9874439-12.0398868 1.115952-23.5648583 2.9085836-34.1611607 5.3090876-.6661993-2.6798338-1.2563004-5.3127329-1.7598229-7.8868498zm110.4268332 27.2672294c-2.533105-4.3754063-5.133652-8.647374-7.784777-12.8026884 8.168002 1.032563 15.99379 2.4032381 23.342942 4.0805836-2.206387 7.0711887-4.956393 14.4645409-8.19352 22.0438091-2.322127-4.4086708-4.778224-8.8537956-7.364645-13.3217043zm-45.03178-43.8611468c5.04434 5.464929 10.09597 11.566438 15.064668 18.1865069-5.006975-.2364961-10.075921-.3595288-15.186788-.3595288-5.062567 0-10.094147.1202987-15.070136.3526937 4.97371-6.5585527 10.069085-12.6518596 15.192256-18.1796718zm-45.3202226 43.9367891c-2.5303719 4.3877096-4.9409009 8.8086837-7.2265745 13.23786-3.1847235-7.5528392-5.9092136-14.9799114-8.1347379-22.1513491 7.3040395-1.6345118 15.0929189-2.971011 23.2089741-3.98398-2.6884917 4.1935912-5.3104547 8.4970007-7.8476617 12.8965578zm8.0814237 65.35222c-8.38536-.935504-16.2913482-2.203195-23.5935651-3.792596 2.2610672-7.299483 5.0457066-14.88513 8.2978701-22.600646 2.2915975 4.425987 4.7116957 8.848784 7.2575606 13.246063h.0004556c2.5932554 4.479756 5.2799243 8.86792 8.0376788 13.147179zm37.5413689 31.030206c-5.183321-5.592518-10.353427-11.778782-15.402779-18.433027 4.901712.192295 9.899117.290722 14.978089.290722 5.217952 0 10.37621-.117565 15.453359-.343581-4.985103 6.774089-10.018505 12.969922-15.028669 18.485886zm52.198205-57.816696c3.421675 7.798904 6.306108 15.344908 8.596338 22.519991-7.422515 1.693293-15.436498 3.057134-23.880185 4.070559 2.657506-4.211364 5.280835-8.556696 7.858597-13.026427 2.607838-4.522133 5.083984-9.051102 7.42525-13.564123zm-16.89831 8.100562c-4.001751 6.938586-8.110131 13.5623-12.280938 19.81464-7.596585.543165-15.444702.822951-23.443647.822951-7.966593 0-15.71583-.247433-23.177988-.731817-4.338953-6.334359-8.536645-12.977667-12.5128789-19.846081h.0009114c-3.9657532-6.849729-7.6157223-13.757331-10.9230227-20.626198 3.306389-6.884818 6.9467889-13.800165 10.8897582-20.637592l-.0009113.001367c3.9534496-6.8556538 8.1142323-13.4666093 12.4130843-19.7613253 7.613444-.5755193 15.420551-.8758102 23.310591-.8758102h.000456c7.925582 0 15.742713.3025691 23.353878.8831012 4.233235 6.2486926 8.365766 12.8382311 12.334709 19.6947964 4.014056 6.9335749 7.70139 13.8028979 11.03603 20.5400769-3.324615 6.852919-7.003747 13.791507-11.000032 20.721891zm22.560091-122.1240512c8.572644 4.943635 11.906372 24.881307 6.520276 51.0257494-.343581 1.6682319-.730449 3.3674497-1.150584 5.0894514-10.620909-2.4506285-22.154083-4.274246-34.229054-5.407058-7.03428-10.0171377-14.323738-19.1238337-21.640537-27.0079496 1.967156-1.8924245 3.931578-3.6969038 5.887797-5.399767 18.899641-16.4476453 36.563943-22.94149194 44.612102-18.3004262zm-58.284676 78.4351498c12.624974 0 22.859925 10.2344954 22.859925 22.8599254 0 12.624974-10.234951 22.859927-22.859925 22.859927-12.624975 0-22.859926-10.234953-22.859926-22.859927 0-12.62543 10.234951-22.8599254 22.859926-22.8599254z"
          fill="#00d8ff"
        />
      </svg>
    );
  }
  if (name === "python") {
    return (
      <svg
        {...props}
        height="255"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 255"
        width="256"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient id="a" x1="12.959359%" x2="79.638833%" y1="12.039393%" y2="78.200854%">
          <stop offset="0" stopColor="#387eb8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="b" x1="19.127525%" x2="90.741533%" y1="20.579181%" y2="88.429037%">
          <stop offset="0" stopColor="#ffe052" />
          <stop offset="1" stopColor="#ffc331" />
        </linearGradient>
        <path
          d="m126.915866.07227555c-64.8322829.00000462-60.7837372 28.11518925-60.7837372 28.11518925l.0722755 29.1270467h61.8678717v8.7453417h-86.4415589s-41.486166-4.7049094-41.486166 60.7114618c-.00000463 65.416358 36.2100508 63.096556 36.2100508 63.096556h21.6103896v-30.355731s-1.1648552-36.210051 35.6318464-36.210051h61.3619421s34.475438.557297 34.475438-33.3190286v-56.0135516c0-.0000047 5.234323-33.89723325-62.518352-33.89723325zm-34.1140591 19.58667415c6.1553999-.0000045 11.1304351 4.9750349 11.1304351 11.1304348.000004 6.1553999-4.9750352 11.1304348-11.1304351 11.1304348-6.1553999.0000046-11.1304348-4.9750349-11.1304348-11.1304348-.0000047-6.1553999 4.9750349-11.1304348 11.1304348-11.1304348z"
          fill="url(#a)"
        />
        <path
          d="m128.757101 254.126271c64.832302 0 60.783738-28.11519 60.783738-28.11519l-.072275-29.127046h-61.867872v-8.745342h86.441559s41.486166 4.704896 41.486166-60.711485c.000023-65.4163514-36.210051-63.0965491-36.210051-63.0965491h-21.61039v30.3557243s1.164874 36.2100508-35.631846 36.2100508h-61.361948s-34.475437-.557296-34.475437 33.319052v56.013552s-5.2343225 33.897233 62.518356 33.897233zm34.114059-19.586674c-6.155401 0-11.130434-4.975033-11.130434-11.130435 0-6.155403 4.975033-11.130435 11.130434-11.130435 6.155403 0 11.130435 4.975032 11.130435 11.130435.000023 6.155402-4.975032 11.130435-11.130435 11.130435z"
          fill="url(#b)"
        />
      </svg>
    );
  }
  if (name === "node") {
    return (
      <svg {...props} height="289" preserveAspectRatio="xMidYMid" viewBox="0 0 256 289" width="256" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m127.999999 288.463771c-3.975155 0-7.6853-1.060043-11.130435-2.915115l-35.2463756-20.935818c-5.3002084-2.915114-2.650103-3.975156-1.0600426-4.505177 7.1552801-2.385091 8.4803317-2.915114 15.900623-7.15528.7950291-.53002 1.8550717-.265009 2.650103.265011l27.0310552 16.165632c1.060043.530021 2.385094.530021 3.180126 0l105.739129-61.21739c1.060043-.530023 1.590063-1.590063 1.590063-2.915115v-122.1697723c0-1.3250538-.53002-2.3850941-1.590063-2.9151143l-105.739129-60.9523818c-1.060043-.5300201-2.385094-.5300201-3.180126 0l-105.7391316 60.9523818c-1.0600403.5300202-1.5900605 1.8550717-1.5900605 2.9151143v122.1697723c0 1.060041.5300202 2.385092 1.5900605 2.915115l28.8861293 16.695652c15.6356117 7.950309 25.4409949-1.325052 25.4409949-10.600415v-120.579712c0-1.5900605 1.3250515-3.1801232 3.1801232-3.1801232h13.5155288c1.5900627 0 3.1801232 1.3250515 3.1801232 3.1801232v120.579712c0 20.935818-11.3954436 33.126293-31.2712211 33.126293-6.0952375 0-10.8654235 0-24.3809523-6.625258l-27.8260867-15.90062c-6.89026889-3.975157-11.1304347-11.395446-11.1304347-19.345758v-122.1697723c0-7.9503092 4.24016581-15.3706005 11.1304347-19.3457551l105.7391293-61.21739308c6.62526-3.71014336 15.635612-3.71014336 22.260872 0l105.739129 61.21739308c6.890269 3.9751546 11.130435 11.3954459 11.130435 19.3457551v122.1697723c0 7.950312-4.240166 15.370601-11.130435 19.345758l-105.739129 61.21739c-3.445137 1.590063-7.420291 2.385095-11.130437 2.385095zm32.596275-84.008283c-46.376813 0-55.917185-21.200829-55.917185-39.221533 0-1.590062 1.325052-3.180123 3.180123-3.180123h13.78054c1.590061 0 2.915112 1.06004 2.915112 2.650103 2.120083 14.045549 8.215323 20.935818 36.306419 20.935818 22.260871 0 31.801243-5.035197 31.801243-16.960663 0-6.890269-2.650103-11.925466-37.366461-15.370601-28.886127-2.915114-46.90683-9.275363-46.90683-32.331263 0-21.4658385 18.020703-34.1863359 48.231884-34.1863359 33.921324 0 50.616976 11.6604571 52.737059 37.1014499 0 .795031-.265011 1.590063-.795031 2.385094-.53002.53002-1.325052 1.06004-2.120083 1.06004h-13.780538c-1.325051 0-2.650103-1.06004-2.915114-2.385092-3.180123-14.575569-11.395446-19.345757-33.126293-19.345757-24.380954 0-27.296066 8.480332-27.296066 14.84058 0 7.685301 3.445134 10.070395 36.306418 14.310561 32.596273 4.240165 47.966873 10.335403 47.966873 33.126292-.265011 23.320912-19.345755 36.57143-53.00207 36.57143z"
          fill="#539e43"
        />
      </svg>
    );
  }
  if (name === "next") {
    return (
      <svg {...props} height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" />
      </svg>
    );
  }
  if (name === "go") {
    return (
      <svg {...props} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none">
          <path
            d="m21.4679537 3.20617761c.7135135 1.47335907-1.4548263 1.63088803-1.3436294 2.28880308.203861 1.18610039.0648649 2.94671815-.0926641 4.67953671-.2687258 2.9374517 1.9274132 9.9706563-2.650193 12.7969112-.8617761.5374517-2.9096525.8339768-4.9297297.8803089h-.0092665-.0092664c-2.0200772-.0463321-4.34594591-.3428572-5.20772197-.8803089-4.56833977-2.8262549-2.37220078-9.8594595-2.63166024-12.7969112-.16679536-1.73281856-.3057915-3.49343632-.09266409-4.67953671.11119691-.65791505-2.05714286-.8061776-1.34362934-2.28880308.61158301-1.26949807 2.12200772-.14826255 2.5019305-.54671815 1.93667954-2.01081081 4.29034749-2.54826255 6.14362934-2.5945946h1.019305c1.8440155.0926641 4.1976834.5930502 6.1436294 2.5945946.3799227.3984556 1.881081-.72277992 2.5019305.54671815zm-10.0355213 7.70038609c-.0833977.0370656-.2223938.9451738.203861.9915058.2872587.0277992 1.0749035.1204633 1.2602317 0 .36139-.2316602.3243243-.7876448.1204633-.9266409-.3428571-.2223939-1.4918919-.1111969-1.584556-.0648649zm-2.35366792-6.80154439c-.95444016-.11119692-2.55752896.77837837-2.7984556 2.66872586-.25945946 1.96447877 2.05714286 3.91042473 4.28108112 1.96447877 1.1953668-1.04710425 1.6123552-4.27181467-1.48262552-4.63320463zm6.44942082 0c-3.0949807.36138996-2.6779922 3.58610038-1.4826255 4.63320463 2.2239383 1.94594596 4.5405406 0 4.2810811-1.96447877-.2316602-1.89034749-1.834749-2.77992278-2.7984556-2.66872586z"
            fill="#8cc5e7"
          />
          <path
            d="m12.3127413 8.98841699c.5837838-.08339768 1.9830116.58378378 1.8903475 1.37142861-.1111969.9173745-3.6046332 1.0378378-3.7899614-.0555985-.1111969-.66718146.4169884-1.09343629 1.8996139-1.31583011zm7.8857143 7.38532821c-.2872587-.0092664-.4725869-.3891892-.4725869-.6208494 0-.4169885.0555985-.9081082.36139-1.1212356.6301158-.4355212 1.1305019 1.7513514.1111969 1.742085zm-15.78069498 0c-1.01930502.0092664-.51891892-2.1776062.11119691-1.742085.3057915.2131274.36138996.7042471.36138996 1.1212356 0 .2316602-.18532818.611583-.47258687.6208494zm13.84401548 6.7181467c.1853281.2687259.1945946.454054-.1019305.5930502-1.130502.5189189-2.1405406-.1760618-1.7606178-.3706564.8061776-.407722 1.3065637-1.0471042 1.8625483-.2223938zm-11.90733595.0926641c.55598456-.8247104 1.05637066-.1853282 1.86254827.2223938.37992278.1945946-.63011583.8895753-1.76061776.3706564-.2965251-.1389962-.28725869-.3243243-.10193051-.5930502z"
            fill="#b8937f"
          />
          <path
            d="m19.7351351 3.42857143c.0463321-.1945946.5281854-.28725869.7969112.04633204.3243244.3984556-.4725868.94517375-.5096525.72277993-.0926641-.6023166-.3428571-.57451738-.2872587-.76911197zm-14.85405402 0c.05559846.19459459-.19459459.16679537-.28725869.76911197-.03706563.22239382-.83397683-.32432433-.50965251-.72277993.25945946-.33359073.74131275-.24092664.7969112-.04633204zm10.86023162 4.51274131c-.5834174 0-1.0563706-.47295325-1.0563706-1.05637066 0-.5834174.4729532-1.05637065 1.0563706-1.05637065s1.0563707.47295325 1.0563707 1.05637065c0 .58341741-.4729533 1.05637066-1.0563707 1.05637066zm-.2779922-1.17683398c.184237 0 .3335907-.14935365.3335907-.33359073 0-.18423707-.1493537-.33359073-.3335907-.33359073-.1842371 0-.3335908.14935366-.3335908.33359073 0 .18423708.1493537.33359073.3335908.33359073zm-4.1050193 2.66872587c.1111969-.42625482.5003861-.56525096.815444-.57451737.8061776-.01853282 1.1119691.41698842 1.1397683.75984556.0555985.58378378-2.2054054.72277988-1.9552123-.18532819zm-2.48339773-1.49189189c-.5834174 0-1.05637065-.47295325-1.05637065-1.05637066 0-.5834174.47295325-1.05637065 1.05637065-1.05637065.58341741 0 1.05637066.47295325 1.05637066 1.05637065 0 .58341741-.47295325 1.05637066-1.05637066 1.05637066zm.27799228-1.17683398c.18423708 0 .33359074-.14935365.33359074-.33359073 0-.18423707-.14935366-.33359073-.33359074-.33359073-.18423707 0-.33359073.14935366-.33359073.33359073 0 .18423708.14935366.33359073.33359073.33359073z"
            fill="#000"
          />
        </g>
      </svg>
    );
  }
}
