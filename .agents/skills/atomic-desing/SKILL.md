# Atomic Design

**Value:** Simplicity, communication, predictability, and scalability.

Building UI from small, named, composable pieces creates a shared language across designers and developers. Every component has a clear responsibility, making interfaces easier to understand, test, extend, and maintain.

## Purpose

Organize UI into a hierarchy of increasing complexity:

**Atoms → Molecules → Organisms → Templates → Pages**

Each level has strict responsibilities and composition rules.

The outcome is a design system where:

* Components are reusable
* Components are testable in isolation
* Visual consistency is enforced
* Business logic remains separate from UI
* Teams share a common vocabulary

---

# Core Principle

Every UI element must be traceable to a design token and an atomic hierarchy.

```text
Design Tokens
      ↓
    Atoms
      ↓
  Molecules
      ↓
  Organisms
      ↓
  Templates
      ↓
    Pages
```

If a component cannot be clearly classified, its responsibility is probably unclear.

---

# Component Hierarchy

## 1. Atoms

The smallest indivisible UI elements.

### Characteristics

* Single responsibility
* No knowledge of business context
* No internal composition of multiple UI concepts
* References design tokens only
* Highly reusable

### Examples

```text
Button
Input
Label
Checkbox
Radio
Avatar
Badge
Icon
Spinner
Text
Divider
```

### Good

```tsx
<Button />
<Input />
<Avatar />
```

### Bad

```tsx
<SearchInput />
<UserProfileCard />
<LoginButton />
```

These already combine multiple concepts.

### Rules

* Maximum ~50 lines of code
* No API calls
* No business logic
* No feature-specific naming

### Naming

```text
Button
Input
Avatar
Icon
```

Never:

```text
ProductButton
CheckoutInput
LoginAvatar
```

---

## 2. Molecules

Small groups of atoms working together toward a single interaction.

### Characteristics

* Composed entirely of atoms
* Represents one user interaction
* Still reusable across features

### Examples

```text
FormField
SearchBar
SelectField
PasswordField
CardHeader
PaginationControl
```

### Example

```text
FormField
 ├── Label
 ├── Input
 └── ErrorMessage
```

### Rules

* One interaction pattern
* Maximum ~100 lines
* No data fetching
* No feature ownership

### Good

```tsx
<FormField />
<SearchBar />
```

### Bad

```tsx
<UserRegistrationForm />
<ShoppingCart />
```

These are organisms.

---

## 3. Organisms

Complex sections composed of molecules and atoms.

### Characteristics

* Represents a meaningful feature area
* Can contain multiple interactions
* Still independent from page layout

### Examples

```text
LoginForm
NavigationBar
ProductGrid
CheckoutSummary
UserProfilePanel
DataTable
CommentSection
```

### Example

```text
LoginForm
 ├── EmailField
 ├── PasswordField
 └── SubmitButton
```

### Rules

* One feature area
* No page-level layout concerns
* No routing logic
* No API calls

### Good

```tsx
<LoginForm />
<ProductGrid />
```

### Bad

```tsx
<HomePage />
<AccountDashboard />
```

These are templates or pages.

---

## 4. Templates

Page-level structure without real content.

### Characteristics

* Defines layout
* Defines slots
* Defines regions
* Uses organisms as building blocks

### Examples

```text
AuthTemplate
DashboardTemplate
ListDetailTemplate
MarketingTemplate
```

### Example

```text
DashboardTemplate
 ├── Sidebar
 ├── Header
 ├── MainContent
 └── Footer
```

### Rules

* No hardcoded business data
* No API calls
* No feature-specific logic

### Good

```tsx
<DashboardTemplate>
  {content}
</DashboardTemplate>
```

### Bad

```tsx
<DashboardTemplate user={currentUser} />
```

Templates should not know business entities.

---

## 5. Pages

Concrete implementation of templates.

### Characteristics

* Connects data to UI
* Handles routing
* Handles data fetching
* Handles state management
* Uses templates

### Examples

```text
LoginPage
DashboardPage
ProductPage
CheckoutPage
```

### Example

```tsx
export function LoginPage() {
  const user = useUser();

  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
```

### Rules

Pages may:

* Fetch data
* Use hooks
* Call APIs
* Manage state

Pages should NOT contain:

* Raw UI markup
* Styling
* Repeated visual patterns

---

# Presentational Boundary

## UI Components

Atoms, Molecules, Organisms, Templates

Must be:

```text
Data In
Events Out
```

### Allowed

```tsx
<UserCard
  name={user.name}
  avatar={user.avatar}
  onClick={handleClick}
/>
```

### Forbidden

```tsx
function UserCard() {
  const user = await api.getUser();
}
```

---

# Design Tokens

Every visual decision must originate from a token.

## Token Categories

```text
Colors
Spacing
Typography
Border Radius
Elevation
Animation
Breakpoints
Z-Index
```

### Example

```css
--color-primary
--color-danger

--spacing-xs
--spacing-sm
--spacing-md

--font-size-sm
--font-size-md

--radius-sm
--radius-md
```

### Good

```css
.button {
  padding: var(--spacing-md);
  background: var(--color-primary);
}
```

### Bad

```css
.button {
  padding: 13px;
  background: #0066cc;
}
```

---

# Composition Over Configuration

Prefer creating new components through composition.

### Good

```tsx
<IconButton>
  <Icon />
</IconButton>
```

### Good

```tsx
<Card>
  <CardHeader />
  <CardBody />
</Card>
```

### Bad

```tsx
<Button
  variant="primary"
  size="large"
  icon="left"
  iconType="search"
  rounded
  elevated
  compact
  outlined
/>
```

If a component accumulates many flags, split it into smaller components.

---

# Recommended Directory Structure

```text
src/
├── design-system/
│   ├── tokens/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
├── features/
│   ├── auth/
│   ├── users/
│   ├── products/
│   └── checkout/
│
├── pages/
└── app/
```

### Rule

Design system components must never depend on features.

Allowed:

```text
features → design-system
```

Forbidden:

```text
design-system → features
```

---

# Decision Framework

When creating a new component:

### Ask 1

Can it exist alone?

```text
Yes → Atom
No → Continue
```

### Ask 2

Does it represent a single interaction?

```text
Yes → Molecule
No → Continue
```

### Ask 3

Does it represent a feature section?

```text
Yes → Organism
No → Continue
```

### Ask 4

Does it define page structure?

```text
Yes → Template
No → Page
```

---

# Anti-Patterns

## God Components

```tsx
<ProductPage />
```

Containing:

```text
Fetching
State
Layout
Forms
Tables
Cards
Styling
Business Logic
```

Split across hierarchy.

---

## Raw Markup in Organisms

Bad:

```tsx
<LoginForm>
  <label />
  <input />
  <button />
</LoginForm>
```

Good:

```tsx
<LoginForm>
  <FormField />
  <FormField />
  <Button />
</LoginForm>
```

---

## Token Explosion

Bad:

```css
--card-header-padding-top
--card-header-padding-left
--card-header-padding-right
```

Good:

```css
--spacing-sm
--spacing-md
--spacing-lg
```

Use semantic reusable tokens.

---

# Verification Checklist

Before merging:

* [ ] Every visual value comes from a token
* [ ] Every UI element traces back to atoms
* [ ] No raw markup inside organisms when an atom exists
* [ ] Components have a single responsibility
* [ ] UI components are presentational
* [ ] Data fetching occurs only in pages/containers
* [ ] Composition is preferred over configuration
* [ ] Design system does not depend on feature code
* [ ] Component classification is obvious from its location
* [ ] New components fit naturally into the hierarchy

## Enforcement

### Hard Rules

* No hard-coded visual values in components
* No API calls in atoms, molecules, organisms, or templates
* No feature-specific naming inside the design system
* No inheritance-based component architecture
* No skipping hierarchy levels

### Preferred Rules

* Atoms ≤ 50 LOC
* Molecules ≤ 100 LOC
* Organisms remain focused on one feature area
* Templates remain data-agnostic
* Pages contain orchestration, not presentation