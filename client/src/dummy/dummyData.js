// Mypage 컴포넌트 : 내가 쓴 리뷰

const dummyMypageReview = [
  {
    id: 1,
    src: 'https://t1.daumcdn.net/cfile/tistory/991D724F5C7399EB06',
    title: `너무 행복했던 불국사 여행`,
    description: `지난 주말에는 친구들과 함께 경주 불국사를 방문해 맛집 탐방을 했어요.`,
    count: 256,
    likeCount: 12,
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Korea-Gyeongju-Cheonmachong-Entrance-01.jpg/240px-Korea-Gyeongju-Cheonmachong-Entrance-01.jpg',
    title: `천마총의 장엄한 모습`,
    description: `신라시대에 만들어진 무덤 천마총을 방문했다. 너무 큰 자태에 놀랐고 장엄하게 느껴지기까지 했다.`,
    count: 312,
    likeCount: 55,
  },
  {
    id: 3,
    src: 'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9353/20180301095612_H9GPB/jpg',
    title: `10년 만에 방문한 남이섬`,
    description: `어릴 때 추억이 많았던 남이섬을 10년 만에 방문하게 되었다.`,
    count: 1,
    likeCount: 0,
  },
  {
    id: 4,
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Dokdo_Photo.jpg',
    title: `독도 첫 방문 리뷰`,
    description: `며칠 전 친구들과 함께 독도 여행을 갔다왔다. 날씨가 맑은 날에만 갈 수 있어서 운도 따라줘야 한다.`,
    count: 225,
    likeCount: 12,
  },
  {
    id: 5,
    src: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/9XR_tCZUq7SuTfuCZ-LYARR0F7g.jpg',
    title: `유채꽃이 가득한 제주도 성산 일출봉`,
    description: `봄에 여행하기 가장 좋은 여행지 제주도 성산 일출봉에 친구와 함께 갔다왔다.`,
    count: 111,
    likeCount: 32,
  },
  {
    id: 6,
    src: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ZzM6LVP0MHhbtcqSpuHMjhqlFlI.jpg',
    title: `경주 동궁과 안압지의 야경`,
    description: `1,000년의 역사가 살아 숨 쉬는 곳이지만 학창 시절 수학여행의 장소로만 기억되는 곳이기도 하다.`,
    count: 112,
    likeCount: 22,
  },
  {
    id: 7,
    src: 'https://allways.smotor.com/wp-content/uploads/2019/06/190604_%ED%95%B4%EC%99%B8%EB%8A%90%EB%82%8C%EC%97%AC%ED%96%89%EC%A7%80_%EB%B3%B8%EB%AC%B82.png',
    title: `해외인 듯 해외 아닌 듯한 남해 독일마을`,
    description: `남쪽에서 느끼는 독일 감성. 남해 독일마을에 다녀왔다. 독일식 가옥들이 매력적인 곳.`,
    count: 64,
    likeCount: 39,
  },
  {
    id: 8,
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYGBgZGBoaGhwcGhgZGBgZGRoYGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQsJCs0NDQ0NDYxNDU0NDQ0NDQ0NDQ0NDQ0NzQ0NDQ0NDQ0NDQ2NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIAKoBKQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEgQAAIBAgQDBQYDAwcKBwAAAAECEQADBBIhMRNBUQUiYXGRBjJCgaGxUtHwFMHhFlNikrLS8RUjM0NygpOiwtMkNFRzg6Pi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQMEAQMFAQEAAAAAAAABAhESAyExBBNBURRxkaEiMmGB4bEV/9oADAMBAAIRAxEAPwCzhVNUq826Rt19BkfPKNAzW5qt05Uay6RVRSmpEyiBMlRyUabdFYbBZoqnqKKtkx0nJ0jMSxPKiEwTRMV0dnBKkaTWjZsKRtXNLqq4OyHRrycR+z6watezKjTXnXW4jBIWBIkjw/fULPZ6jYbdan5KaspdJWxm4Ls7KB3a1BgDoToOgrTs2xvFRxVyBXLLVlJnXHSjGILAQRFVhi22lQdyd6hxo2EmmkDZayRoPWq3UAb68z+tqbLzb/CovZzDnH3qkJmbiMQgOxdugGnrVVq3dcyQEH1/h8orRXDBTMfrzqrE4oLoGk9Br9eVbJ+EjnkvLZj9pzsCQOZO5rOWz+EE1sNYzHM5H+8dPkNzU1uW1/E3gBlWumM8VSOSennK26MpMCx/Ia0ba7GbdiFHj+VGDEvEIgQdefrVT22OrvSepJ+aHHSgvDf4EuFsp7xLn0FWJjAultFHjFDkIPH61E3ei+utLG+dysseKX0L3xLtux8hQ73AP46mn4TtvoPSmGGUbt6CmlFEylJ/6DXHJqnJ86PCqPhnzNSznkAPlJ+taKVcIxcL5YImDYiYgUzWNdx8taJcE7knzNMLdPJ+ROEfCB+EvifSnCjkg+etEcOn4dGQYg4dhtp5AD7VFlJ3JNFcOlw6MkDi2CcKkLVF8On4dGQu2CcKm4dGcOlw6MhdsKKVHJRnDpstceZ3YgZt1ApRxt06WaeYYAtrD86MsMFNWZIofhyYJiocsuTRRx4NtUBjnRdpPCh7KQo8qMtmuObO6CIOlSt2x+jTu06UpAGpqbKpE7jhRpQL2yx1qF/FiYmT4VLjhRLHU8pqlFolyTIPZEa7VXxVBgb1O9fA9/TmBzPyrNuY3fIsE/Ed/kK1jFyMpSjELu3Qvvb8hQV7tb8Kz9v40G6sxliSfGkuHmt46cVyc0tWT/bsVYjEu+506DSq7dpuX0o9cMBv9avAUVrmkqSM8G3cmApg+tELhgOUeJ3q4XfwgDzNRfXdyfADSocm+S1GK4KnA5STQzWZ94gfOT6Cicg8T9KkpjZQPlJ+tUnXBLV8gwRBspY9Tp9BUCTygeQ/Roxyx3JqPDpqXslx9AhUmlw6L4dLhU8hYAnDpxbovh0uHRmGALw6WSi+HT8OlmGAJkp+FRfDpcOjMMAThU/Dovh0uHRmGAJw6XDovh0uHRmGAJkpZKL4dNw6MwwCOHS4dF5KWSuLM7O2CZKsQRrV3Cqa2D5UOaGoMEyE0wwx30rRXDjnVgtAcqXdKWl7K7JMbTRBvBR3jFVNA+KKrLjkP31lya8CvYsfCD50I5duTHyEUQ1zz+QH3NVu56n5n8q0jtwjOW/LA3teS/eqinOaN1pilaqRk4gRSacWqM4dLh08xYAqp4U5B60Tw6fh0swwBOHT8Kihbp+HTzDAF4dPw6KyUslGYYAvDpcOi8lPkozDAE4dLh0Xkp8lGYYAnDpcOjOHS4dGYYAfDp+HRfDpcOlmGAJw6fJRXDpcOjMMAXJT5KJy0stGYYA2SlkorJTZaeYYA2SlkonLTZaMxYg2SmyUTkpstGYYhAEUs1BJ2lbPxj5yPvVq4hSJDKR1BEVyNNcnWnF8Mvmnz0M2KQbuvzYUjik/Guv9IUbht7CC9NmPWqRiF5MKkHB2NAydKTUc1Kadiokajlps1M9wKJYgDqTA9TTsVEstNlqFq+r6oysOqkH7UB2h27ataFs7fhTWD/SOy/fwoTb2QNJGplpZa5K57V3PhtoOklm+0VG77U3SBlRF88zemoj61eMhbHYRSiuUwftWw0uoD/STQ/NWMH1Faf8AKbDxOZp/DlM/l9aTUkOkbEUorOwfbdm4YV4Y/C3dPynQ/ImtEtUttcjxQop4rNxnbli3Oe4sj4VIZvQbfOKzU9rrc9624HIgq3rqI+tNZPgTSR0gWny1m2O3cO+11R4NKfLvQK0FuAiQQQdiNj5Gk20NRRPLSC1EuAJJgDc9KjYxSOJR1YDfKQY9KVsMC3LSy02enzUZMMB8tNlpZqWaiwxFlpZaWaqMVi0trmdwo8efgBuT4CiwxLstLLWUvtHhj8Z/qP8A3aH/AJU25jJcidDC6jr7008mGFm5FKKwrntQmuRHbzyqPmZJHpQN72lukEqiIOurH9w+lGQdtnVxQt/GW0OV7iKejOoPoTXCXu0b9wnNccgz7rAD5qun0oNVI5bcv3xVWHbPSrOIR/cdX/2WB+1WxXmKk7Rzkz942+dWftd7+df+u396ixYBd3tJVHuH5sJ9ADVa9rJ0I+o9dIoVUsFHYKGbIwT/ADju2dcmU6QMplxqOXIb5r2xAJa4DHeHDUqumynOM0bcqtajfgy7UfZ0J7STTvbqWjyn0Omg58ql+2qVzg93mY0EZQdfNl9awb2Jw0DKl/NoSSqMNoIADCPPWtJMj2RDOoJcZWtiQc2HJOXOAVgeO5Pw0u5LbYp6UPMjTweMzGELTvpt4+FG2MRdJhcxMEgZQToCx2M7A1gr2fZ0ebhPEJM5FlJWACLndPvSdfe20o3s5HDCL+kGVZVPdC97vcQlRA3olN03QowjaVmlizdUE3WZUXdpSNdFgBpMnSgLfaVszF9lIBI91W2J3aQCdBtzoHtW5aOdlzMXM5kZhmDGRIYAGBB5+dZyZz30bLlXKJMwRroY38o3O8mslq7bmy0d9kaeOxFvNl411gZk92WBIAGWR0J21zDQRq5w+HCB3vMoJMDIpPu5gMoYkHl5iudXC3S0AFiTPhr49d6sTDONMktqDzgnzInn6Gk9VryUtJejYwxwoOa5eJUbqqFWIPQuPHkD8q0XwWGdC1i6JAdzmcHIiFRGVEkkk6ajbnXN45MttA1sqRmJcCWaZ0IJ1CjYiNidaFdE4PGUn/S8PYAgMhfTnyImdZOmmrjJypphKMY7Ubr4V1klTlHMgA7x7s6nbSlZshzlS4CddCjjYEkDKG8d4rH7P7RuKxKB38VLKR8XQry5iup7M9oEuZ0QEEI8GQCRkJbMASRrEAARG5pynJCSiZ64RiSANACZHxRIBExpIieVSxHZx7vDLOSNYWADlBbXwJKxrtvqBW2cWttzaNwI0DKSheQXGkSJAZmJPiRrsAe0rOJVrgF8FbOVWdVKuockQFXVSGdhBM1K1HdFONoz7nZzqs5GbUyFDmI31Ay6SNCec0E+OcrkzvkPwZmK6eGxrd7WuFUUlUzO5cjIIAYSpCktlYRHWAAeg0MJcQKmbIhKKzPmRC7FS0RB/o6iJ0Gmgpubq2CjHJo4xLDkFspyjXMe6v8AWOlM1pl3ESJ66dZEiK62/wBoWh3ypbMYylQeZYDvaASBO8wI0qd3FW+IEe4i5QAFNtZGoIG5gak7Rpv1nuP0NwjxZxtxjEyYEAa/rrRGBxty33rdxgNyAdPmp0Poa6O5gcOSDFogfCge2XIYg5QGz7EGdvtRFns5VtyEhSxiULZWhB3u8GX3hqQBJHOKfd2EtPezIu9pX3/0ociM0hSFgc8o03IE+NPh2cd9A5InVEeVAnVjlgAwd94rdxXZ+UIxxAVXc5CSLcCCdMymO8FOby0gA1r9kLiLQyrdtOC/ukxJAAOo8FHLmTS7zS4Kemm+TPsDHZSXUDKyiWCh2LnKFVdATJXQ5dxrV9hMQbhW65tIAe+UUAnuwIbffkeXiKM7RF91i2iAEq7uLxUhg6MmUrM5grJB5FBsTUF7bBRHOIQOVXPbLIc8v3jKE5RBJ3MK2wI0lzk1aoSjFbOznLnbWJBKygj4iB3uhB1HTYRWc3bV873midYyr9VExodPCus7a7YtuXRLYuFBbIkBkZA03MjkgCEJgSNQdDrWLjsAFxMXymS3Ga2iOFYHvASgYzDKCTExvTUnyx4x4Rgt2g53uOd/iP76rBL6yTHUydfPWK609o4BMotYVXyyZYAh8yuMpZ9dyDrppA2rENrC6uwdc+ZhkdAACdlGsrrHhlPkH3QUGB5YAgeJ6n8v4VDjxOoPgNfKTWhf7PREJyPJ0Cm4gZo5ockONd1BH3rGVisk5o1yyDpvz25jlSUsimqLjcQxmb5agD1pXcVyUjx0j7/P+FREtuDrsYmT5+lSXCNlLB0IB1UsAR4lfXankvJNPwJLhAnST0/X6irEeBvOu09fvVuD7Pd1lAGGgLZgFBJgSTou3PpUbmFKMFJB374JZRGhGZQZj6TyockPdFNx510PhvP661DMPwj0WpO7IT3Cs9RGm06jX+FQ4p/E3q/96ixB73JBGQagjfkflrTIwAAgaaba/U1AMniaYOn4a9Cjw837LswO3/TSctEA/QeH5CnCoFzEVRbvL0+/7qVIpSaLFtNzYURh2dDKuRy0YCR0Mnbwqhbw/D9BVi4gdPov5VElapouEqdpk+2sU7pBRXYjKbnczqv9GIk/Iedc1jbblu5xABAEwZHe1PQjQfWulN8HkfoP3VFiDy+tY9qN2dXyJVVnMWrFzvZ8+o2DwDpud9ukc+Ua6uBnIFLOjkgG4DmYLm8GWBlGwPPwox1HSoxSloxY49RJD3bdi6rI3HRSGKszZz7gMsGY65p0WOWo2qzs72WssjZcQjiQQtxTbBYDQEsGB0ZhpB3qpqst3IWPGfn1qVouKqLKfUJv9SOkwHYiWUUHDWnM5s+QMNdhoG7wIHe038KqwmKVS44dqS3u8FVYCCIBBOkGBI06Gsux2iyahiD1BIPqKbtT2rdEy5VckaG4uYKJg7EEkx1rKcJRVtm0NaM3UUV4i0/EZ2cEFhlttbZhpJB0fKI5EkHp1rVyW1SUv21ZlCuptOMwbNmXMpJI755a96d64XGds3Xl0ARdB3AwVm2LayZJPy+tCv2niFP+kPgCQfmdzHn+VClF82U81dUdZ2mCyMEQKhfOQLaZBoFBOh5QAST6k1G06qqf5u2WVQAxtoWGs6HLprPqa5Ydt3dMzAzpyI8M0bbUd2b2pxJDAAjoOXj0O9dMHCW1HHqrVj+qzqcR2wXthCiEiNSit1/EDG/KgMTiXcyWg9V0jSIA2HWgxc8vSmZ61joxT4MJdTNrkLXFuuxk/iIBb1ijcD286EHQ6mfdkzOkx41iz5U4mm9KD5RC6jUXDN+92+5ZWyklRdgsykjivnMQAIGggg7Daq8N2sQzMzO8mQpy5VO0rlUEHU8+dYpnrTcKeYpdmCVUV8nVbuzosR2yzpkYgggKQ5DAqORVtCN9OXKo4btHIQQtqF5BFUf8o0P2rnmtEfF9T+dRAbqfX86OzCqoPk6id2zqG7XGaRbTcyczyZ31kePzNV43thWuu3DzFsupuPOkRsYGw2Fc2FP4j9KYz+I0diHoH1ep7Oyw/azONMOG01ICsQJI7xKd0d079K08O7uO9bUaDQBHaOcqqQx12JrzwMRGsROsa/epDFOPjcc/eblz3rKXSRf7djWHXyj+5WehXLaxHBIfMAQpC7GCYSFMx1ETJmIoXGhLaFruczyIzk6HmRlG3lpXHp2rd0DOzqNluEuB5Tqp8VIPjVyXLV0MXd0ZUcqjMz25K7qx7yQY7pzT1rN9I47ye38G666MlUVv/LNO92vYVijW3lDElLYaV0JOgYQZ5+fSiU9pLEQRdjTTIkQPJxXGs1RLV0fEhXk5fn6l70dhie1MG5DBnRgZB4ZMRyBW4COXOop2xZzZv2khvxcBw3Q95XmPDauP4hps5pfEj7Y318n4R1+JxWHZVVsUp1JzcK6X8iczCNdo60LOF/8AVj/gv/crmCxp58KPiL2w/wDQn6QacQadLpJoOT0qdoGRJrWzjCsVc7sTJ/XSqEuH9fwqbnahlU0AFC74mpre8KFA8akIpNlIMXEVL9ooQMKlnqWaJsuN6m4tUl6iCKkq2Xm7SF4VRpTrFFiHxmLKJmC9RJ20AJA6mCPWs575IDOZO4jpGvkP4fPUOOIcZ44Wgy2xGUbnLmJiTlk6kheRJNXdq3cIyKlq2zNBGzkgQCGE6Ekgbn4jtXBrSk5bo9XpowUdmrORvYktoozRvE6DzJ05a9RVmwJchRy3OkfU1O81u2XIckF5CzJWB8TECf4Ufh8G2QOzkMdxAJkyYjkdt+lZSkomyi2EWOzbb4K4Sr5zfQBuiqhCqojUEu06a93pQmC7JNu7bIRwCygl5UNJXykag9Ijep3Me6NkS46FSDAbKSwXKzSus70O/a11odrjsF9zM7GI6E+7TU5UqBxje5o4rEoHdUW4CHgKzhlMmJVgg7vgZInc1FcTrqunUMD9Nz8qx8NiDdczLPBMnYKdzvuZ51e1wL3QILHeJbTxHLnHiat62otrZHY0nu4o2RESCD5fadqofFqDBJB132jqD6/Sso33IIzEjXSJETqdJ6n1+dWXC4J3kLBUDSJmJnU+A1px6nWXLTM5dHovdJr+zVW8CJzCJidvvVqknaTO3jWBbxoQqpVYkHpJnn5nrRN7GudQx102J13MflWi6uae6VGT6HTa2bNi4jKMzBlExJBGsTGvhVRbxrFN4hwGDHmcwO3X9dKjYxZS5qgYGe7JWQekbkaaya2h1Lk90Yz6NJbM2j51EmtPAXME652ZwYWUhiA06gEL3h5mrLK4V3cub4BYEFcijXUjKV0itV1Cuqf2MX0jq7X3MiTUS5rqBhOz4gviAevdP2Spf5IwB2xF4eaf/gU/kw839ifh6nivucpnNOrGunf2dwp93GhdfiQfmIqS+y+GI/8AP2+XwgaHwz0/k6Xv8MXwtbwvycrmpi1daPY5CRlxqGZ+AcpnZ/CKTewr/DiLZ8ww/Oj5Wn7JfRa3r8o5GaYkV1D+w2Ikw9kjrmYfTJVLexOK5BG8n/MCrXUab8oT6XVXhnO0q3X9j8YP9TPk6fvaqv5L4v8AmW/rJ/ep96Htfcjsanp/YxzcpLdihppTWWQUabD0OoPhVd62YzDlq3l+L8/8arwWKA7jzkOx5oeo6jqPTxPKEZTAIYSDrlbxUn7UZFqPkyuLTi7RV/s7N3k+a6zJ10HL+FAERoQZ+UR0j11mk5DUS0XqkL9UinB/X60NS2NIu4ppuLVdPSsZYL1S4tU/r9dalRY6LeEXIWRJIGug1MankKL7WwVtCmGVmZ7shrkEBCpRjlUe8uXNOu/TlmkUPiLUkNuYiTqY6VjqxcvodOhqRgt1uPhuxVxOJdLJJtKQzsZKhWPdCgQe8AIBiIMxFdH2h2cyFWzowcKykKA7BlYrCeAE8yQJPOMXAY97eiQBmDad0mInveMbmY5V02A7ZR8vFiETLAASWIChVg+7toIMBdd55NWEvPB6OjqQlxycB2mgR1JzTq0EDaWE+A285ozE4YrZRmlc6h+8IUAkrGvTKOfMExOutfuWHxdlUtAgFg65i+YBXImW7pOgCnbedYHQe0eOw+W5Y1OUMSugDSvdA5tM6FSD9qTb2SRVLd2c72bhmtYXPbtZxcEvcOhkEaEdAT8tTPOsnE4hZyQ/id9WGneMnmNeld9ZxNp8PZL/AObCpohMlWReTNp3SIB1JzeGnJ3+x3LPcViLE++05TwymnIEAyN4MHXQ0ox3bkOV0qAjZ4aKwJYmGzjQElFaBoO7BGvQzzoh7Sqp0MuDmzMG1JBIXQ/i68q68dgI9pJfMUtQUy6hwjKBEwGDoFyyPcI3257tDsK87OgIWGKpqpLsGKkQrHmVB+k6TKbchtUcuy5ladQDOaAAAdAYB3B1mmXF6FZJI0UjQGdpI0FGY7sm7ZTO7JM5GUESpMgFoGoOk67sNqzOz1XiqGZshIzFfeVecab/ACPLQ10qKaswcqYRjQ6ZO8VeQSCe8rEZvzH+NaN3sa+toXmC5GZJI+EOoZSeUGVjU+8K6PHWrX7PwUYuuQq1xntk6pnRWES2ViACIiRyXTGw+KuhBbzkIq5QvdgaQeXSRPjVaOT4r/CNaUYK35/6Wox+I6/IfQCKsR6pBpTXoJJHjSk27YWL1LjHrQc0/EqqROTDhf8AGpLijG9ZxelnoxQLUkvJoHE+R/X8aj+0a7D0FA8SkWpduHoa1pryzRXtBhsxHkY+xq5O2Lg/1j6f038utYpqQajsw9Ir5GqvLNy12/dXa4/9didfEmr/AOVF/wDnX9a50PT8Sl2NP0h/K1fbA6VNSmsbHQ80RhsY6e6RB3UiVPmOXmINDTSmixpUbOHx1toz5kO0wXTlrvnUeHeo9La3ARlW6F3I7xHkVEjluvzrl5p1aDIMEbHaPLpSstM3rvY6Me4xTwILx4CDI+fKh37Gu6lcrwY7rgkecxFUWu2LwEZ846Oqv9XBI+VF2/aAz37amNsrMpHSM5dR6UrZVRYC+DuL71txH9EwPnHjQ+aulse0FswDxE0jYOB6Mv8AZon/ACjh30Z7Z5jiI3WTugG4Hxa0sisE+GcnNPNdavZ+Gue6LZO8JcUH+qjVW/swhgzcE+BgT/tLqBHXWRqaMkHaZy01FzXQv7NKfdvDlAK5zqY3U9fCoH2Uu8nSOpkeWm+8j9aGSF25ejnYpnFbdz2YxA2yN5Mf+oCqH9n8TMcInyZI8pmk6Y4qS8GHEHTTy0p3E/4/P71rP2BiBvajzdP71RbsPED/AFfo6H7NpUYmilJewI3WyxmMbxJiRqDHp6CrMd2g9y2LRYhAVIQHu6eB5HWfE0QOx7/803qses7+FS/yDiD/AKv/AJ0n0zUsEWtWa9hXY/tA9pXBXOG7wUxlDQQYBEiZGoOmUQNwaH7adihYsMmaMuuriGI1BHKF2EaURa9lsSdkX1J/sg/TpVq+x2JPJRrzFz19yKntRsta+pXH4OfvuGDSobMCCWBkmAA5GYy4gaknWTzNVWrIAgACutT2Lf4rqDyy/wDW61d/IggScQoHXIG/sOa0ioxM5vVl4OSVefOrUNdQns5hVniY9NIELAI1HIydp/Qp3wfZaT/4i855ALA3072Tp9j4CtYyiuDmlpzfLS+rOazUxauh/buzVmMNec6xmcrB15hjPLlWF2hiUd5ROGsAZZDajnIVfDrz11rRTt1RnLSSV2v6Kppi1VzSzVeRliWTTzVU0pp5CxLZpTVc0pp5BiWTSmq5pTTsMS3NSzVWDTzRZOJRNKaaaaa5LOuiU0qjNKaVjolNKahNKaLCic0pqE0ppWOizN+tacPVU0posdFs1JLpX3SRz0YjXrpVE0posDVTtzELEX3IG2Zyw/5pFWp7SYkfGh87dv1nJM1izSmlsVlL2b/8qsRz4Z/+MD+zFOvtXeHw2zP/ALn7n0rn5pTRSDKXs6Qe194bJa/+3/uafwqX8s73O3b263f+5XMTSmikPOXs6ce2l/klv1unT/ia7VFvbTE9EHlxP3vXNTTTRSDOXs6G57W4k/Gg/wBxTHiMwP1oc+0eJ5XAN9rdsbmZ0TfxrHmlTpCc5e2aNztrENviLvkHZR6KQKDe4WMsSx6kkn61VSmqVEO3yywNT5qrmlNOyMS2abNUJpTTsWJZNNmqE0pqrCiwGlNVzTzRYsSc0pqE0pp2LEnNKahNPNOwolNKajNPNOwxK5ppqNMtcx0USmlNRFI70gHmlNMaRpDHmlNRp1oAeaU0wpqAJTSmmpjQMlNKai1LnQIlNNmpqYUASmnmoGkaBk5pTUBSFUBOaU1GnoEPNKaiKcUCoeaeajSphRKaU01MaYiU081A09MRKaU1GlTsRKaU1EUlphRKaeajSoFRKaaaYUqdio//2Q==',
    title: `여수에 오면 꼭 가봐야할 곳! 여수 오동도`,
    description: `친구들이 만약 여수에 가게 되면 꼭 가보라는 곳이 있었는데 그곳이 바로 여수 오동도이다.`,
    count: 545,
    likeCount: 332,
  },
];

export { dummyMypageReview };
