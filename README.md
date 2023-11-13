# Media-Watch Documentation


## Light Theme :sunny:

### Colors :art:

| Color       | Code      |
|-------------|-----------|
| Text        | `#061118` |
| Background  | `#f7fafd` |
| Primary     | `#3489c5` |
| Secondary   | `#bbd9ed` |
| Accent      | `#3fa5ee` |



## Dark Theme :new_moon:

### Colors :art:
| Color       | Code      |
|-------------|-----------|
| Text        | `#e7f2f9` |
| Background  | `#020508` |
| Primary     | `#1177c0` |
| Secondary   | `#123044` |
| Accent      | `#3a8ecb` |

## Fonts :fountain_pen:
| Type    | Font      |
|---------|-----------|
| Heading | Pacifico  |
| Body    | Antipasto |


## Components :wrench:

<details>
<<<<<<< HEAD
<summary>Container :bento:</summary>

    > Surrounding component with many types, responsible for the constructionn of bento layouts

    Props:
    - *Type "type" | Type: Contaienr Type [^1]

    [^1]: Valid Values:
=======
<summary>Container :card_file_box:</summary>
    > Surrounding component for majority of media display 
    Props:
    - *Color(s) "colors" | Type: String[]
    - *Style "style" | Type: StyleSheet Component[^1]
    - Gradient Direct "direction" | Type: Direction Type[^2] | Defaults To "left"
    [^1]: In the example "testComponent" would be the value passed as the prop "style"
>>>>>>> 23832cb45db122e90d31f8e4a667d0849d79102f
            ```
            "square"
            "rectangle"
            ```
<<<<<<< HEAD
</details>

<details>
<summary>Heading :bookmark:</summary>

    > Heading component for all pages

    Props:
    - *Title "title" | Type: String
    - Secondary "secondary" | Type: Component
</details>
=======
    [^2]: Valid Values: 
            ```
            "left"
            "right"
            "top"
            "bottom"
            "top-left"
            "top-right"
            "bottom-left"
            "bottom-right"
            ```
</details>
>>>>>>> 23832cb45db122e90d31f8e4a667d0849d79102f
