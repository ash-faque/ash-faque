<div align="center">

<!-- Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=1a3a5c,c9922a&height=160&section=header&text=Ashfaque%20P%20P&fontSize=42&fontColor=f0e8d0&fontAlignY=55&desc=Automotive%20Software%20Engineer&descSize=16&descAlignY=78&descColor=9ab0c8" width="100%"/>

</div>

<br/>

```
 Automotive Software Engineer  ·  Tata Elxsi, Bangalore
 Test Automation  ·  ECU Diagnostics  ·  Embedded Security
```

---

### About

B.Tech Mechanical Engineering graduate working in automotive embedded software at Tata Elxsi.
I build test frameworks, diagnostic automation tools, and the occasional side project that scratches an itch — like a VS Code extension because CAPL deserved better tooling.

Currently working on:
- Security conformance testing (ISO 21434 / SecOC / KeyM) on HIL
- CAPL-based fuzz testing for Security Access (Seed & Key)
- ODX-D & ARXML parser for auto-generating UDS test vectors

---

### Tech Stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![CAPL](https://img.shields.io/badge/CAPL-c9922a?style=flat-square&logoColor=white)
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white)

**Test & Automation**

![PyTest](https://img.shields.io/badge/PyTest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)
![Robot Framework](https://img.shields.io/badge/Robot_Framework-000000?style=flat-square&logo=robotframework&logoColor=white)
![GitLab CI](https://img.shields.io/badge/GitLab_CI-FC6D26?style=flat-square&logo=gitlab&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)

**Automotive**

![Vector CANoe](https://img.shields.io/badge/Vector_CANoe-1a3a5c?style=flat-square&logoColor=white)
![vTestStudio](https://img.shields.io/badge/vTestStudio-1a3a5c?style=flat-square&logoColor=white)
![UDS ISO-14229](https://img.shields.io/badge/UDS_ISO--14229-c9922a?style=flat-square&logoColor=white)
![AUTOSAR](https://img.shields.io/badge/AUTOSAR-0d7a6e?style=flat-square&logoColor=white)
![SecOC](https://img.shields.io/badge/SecOC-8b1a2e?style=flat-square&logoColor=white)
![ISO 21434](https://img.shields.io/badge/ISO_21434-8b1a2e?style=flat-square&logoColor=white)
![CAN-FD](https://img.shields.io/badge/CAN--FD-555?style=flat-square&logoColor=white)
![DoIP](https://img.shields.io/badge/DoIP-555?style=flat-square&logoColor=white)

---

### Featured Project — VS Code Extension

<a href="https://marketplace.visualstudio.com/items?itemName=ashfaque-pp.capl-formatter">
  <img src="https://ashfaque-pp.gallerycdn.vsassets.io/extensions/ashfaque-pp/capl-formatter/0.0.3/1776582731079/Microsoft.VisualStudio.Services.Icons.Default" width="64" align="left" style="margin-right:12px"/>
</a>

**[CAPL Formatter](https://marketplace.visualstudio.com/items?itemName=ashfaque-pp.capl-formatter)**
`ashfaque-pp.capl-formatter`

Code formatting and linting for CAPL — the scripting language used in Vector CANoe for automotive network simulation and ECU testing. Built because the automotive tooling ecosystem deserved proper IDE support.

![VS Marketplace](https://img.shields.io/visual-studio-marketplace/v/ashfaque-pp.capl-formatter?style=flat-square&label=Marketplace&color=007acc)
![Installs](https://img.shields.io/visual-studio-marketplace/i/ashfaque-pp.capl-formatter?style=flat-square&label=Installs&color=0d7a6e)

<br/>

---

### Work at Tata Elxsi

| Period | Project | Stack |
|---|---|---|
| Jan 2025 – present | Automotive Security & Conformance (ISO 21434) | CAPL, Python, C#, vTestStudio, IBM DOORS |
| Jul 2023 – Dec 2024 | ECU Diagnostics & Flashing Automation | Python, Lauterbach Trace32, GitLab CI, Robot Framework |
| May 2024 – present | Internal Tools & DevOps | PyQt, Jira REST API, C#, VS Code Extension API |
| Feb 2023 – Dec 2024 | SIL Simulation Development | Godot Engine, Python (TCP/IP↔CAN), CANoe Panels |

---

### Notable Side Projects

**XML → HTML CANoe Report Converter**
Standalone Python tool that converts CANoe test report XML into a dark-themed, interactive HTML page with collapsible test groups and pass/fail filtering. Built after the XSLT pipeline broke in production.
`Python` `xml.etree` `HTML/CSS`

---

**X.509 DER Parser — No-Heap C Library**
Static ASN.1/X.690 DER parser using index-based pool with zero dynamic allocation. Exposed as a CAPL DLL for ECU certificate chain validation in automotive PKI contexts. Parses Daimler/MB vendor extensions (OID arc `1.3.6.1.4.1.2916.3.6.509.5.*`).
`C` `ASN.1` `X.509` `CAPL DLL`

---

**ImGui Signal Plotter — CANoe DLL Plugin**
Live automotive signal waveform renderer as a CANoe plugin. Dear ImGui + ImPlot + OpenGL3, dedicated Win32 render thread, mutex-protected ring buffer. Covered by a Google Test suite.
`C` `Dear ImGui` `ImPlot` `OpenGL3` `gTest`

---

**PyQt Defect Management Tool**
Desktop app integrating Jira REST APIs to automate test failure ticket creation — cuts the manual copy-paste loop between CANoe test reports and Jira.
`Python` `PyQt` `Jira REST API`

---

### Standards & Compliance

Working knowledge across:

`ASPICE SWE.6 — Software Qualification Test` &nbsp; `ISO 21434 — Cybersecurity Engineering`
`UDS ISO-14229` &nbsp; `AUTOSAR Classic` &nbsp; `SecOC` &nbsp; `DoIP` &nbsp; `CAN-FD` &nbsp; `SOME/IP` &nbsp; `X.509 / PKI`

---

### Connect

[![Portfolio](https://img.shields.io/badge/Portfolio-ash--faque.github.io-c9922a?style=flat-square&logo=githubpages&logoColor=white)](https://ash-faque.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ashfaque--pp-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ashfaque-pp)
[![Email](https://img.shields.io/badge/Email-ashfaqueppbtr@gmail.com-c45a2a?style=flat-square&logo=gmail&logoColor=white)](mailto:ashfaqueppbtr@gmail.com)
[![VS Marketplace](https://img.shields.io/badge/VS_Marketplace-CAPL_Formatter-007acc?style=flat-square&logo=visualstudiocode&logoColor=white)](https://marketplace.visualstudio.com/items?itemName=ashfaque-pp.capl-formatter)

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=1a3a5c,c9922a&height=80&section=footer" width="100%"/>
</div>
