
# UI/UX Documentation

This document provides a detailed overview of the user interface and user experience for each page in the application.

---

## 1. Home Screen (`(tabs)/index.tsx`)

### UI/UX Mockup

```
[-------------------------------------------]
|                                           |
|  [Image: ThemedLogo]                      |
|                                           |
|  <ParallaxScrollView>                     |
|                                           |
|    <ThemedView>                           |
|      <ThemedText type="title">            |
|        Welcome!                           |
|      </ThemedText>                         |
|    </ThemedView>                          |
|                                           |
|    <ThemedView>                           |
|      <ThemedText type="subtitle">         |
|        Step 1: Try the included components|
|      </ThemedText>                         |
|      ...                                  |
|    </ThemedView>                          |
|                                           |
|    <ThemedView>                           |
|      <ThemedText type="subtitle">         |
|        Step 2: Explore                   |
|      </ThemedText>                         |
|      ...                                  |
|    </ThemedView>                          |
|                                           |
|    <ThemedView>                           |
|      <ThemedText type="subtitle">         |
|        Step 3: Get a fresh start          |
|      </ThemedText>                         |
|      ...                                  |
|    </ThemedView>                          |
|                                           |
|  </ParallaxScrollView>                    |
|                                           |
[-------------------------------------------]
```

### Component Breakdown

| Component              | Type                 | Description                                                                                                                                                                             |
| ---------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header Image**       | `Image`              | Displays the application's logo. This is a static image that provides branding for the app.                                                                                              |
| **Parallax Scroll View** | `ParallaxScrollView` | The main container for the screen's content. It provides a parallax scrolling effect for the header image. This creates a modern and visually appealing effect as the user scrolls.       |
| **Welcome Title**      | `ThemedText`         | A large, bold title that welcomes the user to the application. This provides a clear and friendly entry point to the app.                                                                   |
| **Step 1 View**        | `ThemedView`         | A container for the first step in the onboarding process. This section guides the user on how to use the included components.                                                               |
| **Step 2 View**        | `ThemedView`         | A container for the second step in the onboarding process. This section encourages the user to explore the app's features.                                                                  |
| **Step 3 View**        | `ThemedView`         | A container for the third step in the onboarding process. This section provides instructions on how to reset the project to a fresh start.                                                    |

---

## 2. Transaction Detail Modal (`modal.tsx`)

### UI/UX Mockup

```
[-------------------------------------------]
|                                           |
|  <SafeAreaView>                           |
|                                           |
|    <ThemedView>                           |
|                                           |
|      <ThemedText>Amount:</ThemedText>     |
|      <ThemedText>${amount}</ThemedText>    |
|                                           |
|      <ThemedText>Category:</ThemedText>   |
|      <ThemedText>{category}</ThemedText>  |
|                                           |
|      <ThemedText>Date:</ThemedText>       |
|      <ThemedText>{date}</ThemedText>      |
|                                           |
|      <ThemedText>Description:</ThemedText>|
|      <ThemedText>{description}</ThemedText>|
|                                           |
|    </ThemedView>                          |
|                                           |
|  </SafeAreaView>                          |
|                                           |
[-------------------------------------------]
```

### Component Breakdown

| Component         | Type           | Description                                                                                                                                                                           |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Safe Area View**  | `SafeAreaView` | Ensures that the content is displayed within the safe area of the device, avoiding notches and other intrusions. This is crucial for a consistent and accessible user experience.         |
| **Detail Item**   | `ThemedView`   | A container for each piece of transaction information. It uses a row layout to display a label and its corresponding value. This creates a clean and organized presentation of data. |
| **Detail Label**  | `ThemedText`   | A bolded label that describes the information being displayed (e.g., "Amount:", "Category:"). This provides clear context for the user.                                                  |
| **Detail Value**  | `ThemedText`   | The actual value of the transaction detail (e.g., "$100.00", "Groceries"). This displays the core information to the user.                                                               |

---

## 3. Collapsible Component (`components/ui/collapsible.tsx`)

### UI/UX Mockup

```
[-------------------------------------------]
|                                           |
|  <TouchableOpacity>                       |
|    <ThemedText>[Icon] {title}</ThemedText> |
|  </TouchableOpacity>                      |
|                                           |
|  {isOpen && (                            |
|    <ThemedView>                           |
|      {children}                           |
|    </ThemedView>                          |
|  )}                                       |
|                                           |
[-------------------------------------------]
```

### Component Breakdown

| Component            | Type               | Description                                                                                                                                                                      |
| -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Touchable Opacity** | `TouchableOpacity` | A wrapper that makes the header of the collapsible component tappable. This provides a clear and intuitive way for the user to interact with the component.                          |
| **Title**            | `ThemedText`       | The title of the collapsible section. It is displayed with a semi-bold font weight to indicate its importance. An icon is also displayed next to the title to indicate the open/closed state. |
| **Content**          | `ThemedView`       | The content of the collapsible section. It is only visible when the `isOpen` state is true. This allows the user to show or hide content as needed, reducing clutter and improving usability. |
