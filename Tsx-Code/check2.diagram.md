# check2.ts Diagram

```mermaid
flowchart TB
    A[check2.ts] --> B[Map and Set basics]
    A --> C[String reverse by word]
    A --> D[Find largest and second largest]
    A --> E[Find duplicate numbers]
    A --> F[Filter employees by salary and role]
    A --> G[Sum prices with reduce]
    A --> H[Test case status formatter]
    A --> I[Generic identity helpers]
    A --> J[Find item by id]
    A --> K[Test case analytics]
    A --> L[Find non-repeating characters]
    A --> M[Remove duplicates from array]
    A --> N[Validate response statuses]

    B --> B1[Create Map<number, string>]
    B1 --> B2[set / get / has / delete / size]

    C --> C1[Split sentence into words]
    C1 --> C2[Reverse each word character by character]
    C2 --> C3[Join reversed words]

    D --> D1[Scan numbers once]
    D1 --> D2[Track largest and second largest]

    E --> E1[Filter repeated values]
    E1 --> E2[Use Set to keep unique duplicates]

    F --> F1[Keep salary > 55000]
    F1 --> F2[Keep role = QA]
    F2 --> F3[Map to employee names]

    G --> G1[Reduce prices to total]

    H --> H1[Map pass / failed / blocked]
    H1 --> H2[Return status message]

    I --> I1[generic<t>(input)]
    I1 --> I2[Return same array]
    I --> I3[generic<T extends { id: number }>]
    I3 --> I4[Find by id]

    K --> K1[Count passed tests]
    K1 --> K2[Count failed tests]
    K1 --> K3[Find slowest test]
    K1 --> K4[Find tests over duration threshold]
    K1 --> K5[Sum total execution time]

    L --> L1[Split text into chars]
    L1 --> L2[Find first unique char]
    L1 --> L3[Collect all unique chars]

    M --> M1[Build unique list]
    M1 --> M2[Alternative filter by first index]

    N --> N1[Check if any status is 200]
    N1 --> N2[Return true or false]
```
