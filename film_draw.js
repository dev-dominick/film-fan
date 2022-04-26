const apiKey = process.env.OMDB_API_KEY

//The following is a copy-paste taken from https://www.imdb.com/chart/top/
var filmList =  `The Shawshank Redemption 	1. The Shawshank Redemption (1994) 	9.2 	
The Godfather 	2. The Godfather (1972) 	9.2 	
The Dark Knight   3. The Dark Knight (2008) 	9.0 	
The Godfather: Part II 	4. The Godfather: Part II (1974) 	9.0 	
12 Angry Men 	5. 12 Angry Men (1957) 	8.9 	
Schindler's List 	6. Schindler's List (1993) 	8.9 	
The Lord of the Rings: The Return of the King 	7. The Lord of the Rings: The Return of the King (2003) 	8.9 	
Pulp Fiction 	8. Pulp Fiction (1994) 	8.9 	
The Lord of the Rings: The Fellowship of the Ring 	9. The Lord of the Rings: The Fellowship of the Ring (2001) 	8.8 	
The Good, the Bad and the Ugly 	10. The Good, the Bad and the Ugly (1966) 	8.8 	
Forrest Gump 	11. Forrest Gump (1994) 	8.8 	
Fight Club 	12. Fight Club (1999) 	8.8 	
Inception 	13. Inception (2010) 	8.7 	
The Lord of the Rings: The Two Towers 	14. The Lord of the Rings: The Two Towers (2002) 	8.7 	
Star Wars: Episode V - The Empire Strikes Back 	15. Star Wars: Episode V - The Empire Strikes Back (1980) 	8.7 	
The Matrix 	16. The Matrix (1999) 	8.7 	
Goodfellas 	17. Goodfellas (1990) 	8.7 	
One Flew Over the Cuckoo's Nest 	18. One Flew Over the Cuckoo's Nest (1975) 	8.6 	
Se7en 	19. Se7en (1995) 	8.6 	
Seven Samurai 	20. Seven Samurai (1954) 	8.6 	
It's a Wonderful Life 	21. It's a Wonderful Life (1946) 	8.6 	
The Silence of the Lambs 	22. The Silence of the Lambs (1991) 	8.6 	
City of God 	23. City of God (2002) 	8.6 	
Saving Private Ryan 	24. Saving Private Ryan (1998) 	8.6 	
Life Is Beautiful 	25. Life Is Beautiful (1997) 	8.6 	
The Green Mile 	26. The Green Mile (1999) 	8.6 	
Star Wars 	27. Star Wars (1977) 	8.6 	
Interstellar 	28. Interstellar (2014) 	8.6 	
Terminator 2: Judgment Day 	29. Terminator 2: Judgment Day (1991) 	8.5 	
Back to the Future 	30. Back to the Future (1985) 	8.5 	
Spirited Away 	31. Spirited Away (2001) 	8.5 	
Psycho 	32. Psycho (1960) 	8.5 	
The Pianist 	33. The Pianist (2002) 	8.5 	
Léon: The Professional 	34. Léon: The Professional (1994) 	8.5 	
Parasite 	35. Parasite (2019) 	8.5 	
The Lion King 	36. The Lion King (1994) 	8.5 	
American History X 	37. American History X (1998) 	8.5 	
Gladiator 	38. Gladiator (2000) 	8.5 	
The Usual Suspects 	39. The Usual Suspects (1995) 	8.5 	
The Departed 	40. The Departed (2006) 	8.5 	
The Prestige 	41. The Prestige (2006) 	8.5 	
Casablanca 	42. Casablanca (1942) 	8.5 	
Whiplash 	43. Whiplash (2014) 	8.5 	
The Intouchables 	44. The Intouchables (2011) 	8.5 	
Modern Times 	45. Modern Times (1936) 	8.5 	
Once Upon a Time in the West 	46. Once Upon a Time in the West (1968) 	8.4 	
Hara-Kiri 	47. Hara-Kiri (1962) 	8.4 	
Grave of the Fireflies 	48. Grave of the Fireflies (1988) 	8.4 	
Rear Window 	49. Rear Window (1954) 	8.4 	
Alien 	50. Alien (1979) 	8.4 	
City Lights 	51. City Lights (1931) 	8.4 	
Cinema Paradiso 	52. Cinema Paradiso (1988) 	8.4 	
Memento 	53. Memento (2000) 	8.4 	
Apocalypse Now 	54. Apocalypse Now (1979) 	8.4 	
Indiana Jones and the Raiders of the Lost Ark 	55. Indiana Jones and the Raiders of the Lost Ark (1981) 	8.4 	
Django Unchained 	56. Django Unchained (2012) 	8.4 	
WALL·E 	57. WALL·E (2008) 	8.4 	
The Lives of Others 	58. The Lives of Others (2006) 	8.4 	
Sunset Blvd. 	59. Sunset Blvd. (1950) 	8.4 	
Paths of Glory 	60. Paths of Glory (1957) 	8.4 	
The Shining 	61. The Shining (1980) 	8.4 	
The Great Dictator 	62. The Great Dictator (1940) 	8.4 	
Witness for the Prosecution 	63. Witness for the Prosecution (1957) 	8.4 	
Avengers: Infinity War 	64. Avengers: Infinity War (2018) 	8.4 	
Aliens 	65. Aliens (1986) 	8.3 	
American Beauty 	66. American Beauty (1999) 	8.3 	
Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb 	67. Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964) 	8.3 	
The Dark Knight Rises 	68. The Dark Knight Rises (2012) 	8.3 	
Spider-Man: Into the Spider-Verse 	69. Spider-Man: Into the Spider-Verse (2018) 	8.3 	
Joker 	70. Joker (2019) 	8.3 	
Oldboy 	71. Oldboy (2003) 	8.3 	
Braveheart 	72. Braveheart (1995) 	8.3 	
Amadeus 	73. Amadeus (1984) 	8.3 	
Toy Story 	74. Toy Story (1995) 	8.3 	
The Boat 	75. The Boat (1981) 	8.3 	
Coco 	76. Coco (2017) 	8.3 	
Inglourious Basterds 	77. Inglourious Basterds (2009) 	8.3 	
Princess Mononoke 	78. Princess Mononoke (1997) 	8.3 	
Once Upon a Time in America 	79. Once Upon a Time in America (1984) 	8.3 	
Avengers: Endgame 	80. Avengers: Endgame (2019) 	8.3 	
Good Will Hunting 	81. Good Will Hunting (1997) 	8.3 	
Requiem for a Dream 	82. Requiem for a Dream (2000) 	8.3 	
Toy Story 3 	83. Toy Story 3 (2010) 	8.3 	
Singin' in the Rain 	84. Singin' in the Rain (1952) 	8.3 	
Your Name. 	85. Your Name. (2016) 	8.3 	
Star Wars: Episode VI - Return of the Jedi 	86. Star Wars: Episode VI - Return of the Jedi (1983) 	8.3 	
3 Idiots 	87. 3 Idiots (2009) 	8.3 	
2001: A Space Odyssey 	88. 2001: A Space Odyssey (1968) 	8.3 	
Reservoir Dogs 	89. Reservoir Dogs (1992) 	8.3 	
Eternal Sunshine of the Spotless Mind 	90. Eternal Sunshine of the Spotless Mind (2004) 	8.3 	
High and Low 	91. High and Low (1963) 	8.3 	
Citizen Kane 	92. Citizen Kane (1941) 	8.3 	
Spider-Man: No Way Home 	93. Spider-Man: No Way Home (2021) 	8.3 	
Capernaum 	94. Capernaum (2018) 	8.3 	
Lawrence of Arabia 	95. Lawrence of Arabia (1962) 	8.3 	
M 	96. M (1931) 	8.3 	
North by Northwest 	97. North by Northwest (1959) 	8.3 	
The Hunt 	98. The Hunt (2012) 	8.3 	
Vertigo 	99. Vertigo (1958) 	8.2 	
Amélie 	100. Amélie (2001) 	8.2 	
A Clockwork Orange 	101. A Clockwork Orange (1971) 	8.2 	
Come and See 	102. Come and See (1985) 	8.2 	
Full Metal Jacket 	103. Full Metal Jacket (1987) 	8.2 	
Double Indemnity 	104. Double Indemnity (1944) 	8.2 	
The Apartment 	105. The Apartment (1960) 	8.2 	
Scarface 	106. Scarface (1983) 	8.2 	
Taxi Driver 	107. Taxi Driver (1976) 	8.2 	
To Kill a Mockingbird 	108. To Kill a Mockingbird (1962) 	8.2 	
The Sting 	109. The Sting (1973) 	8.2 	
Ikiru 	110. Ikiru (1952) 	8.2 	
Hamilton 	111. Hamilton (2020) 	8.2 	
L.A. Confidential 	112. L.A. Confidential (1997) 	8.2 	
Up 	113. Up (2009) 	8.2 	
Heat 	114. Heat (1995) 	8.2 	
Metropolis 	115. Metropolis (1927) 	8.2 	
Snatch 	116. Snatch (2000) 	8.2 	
A Separation 	117. A Separation (2011) 	8.2 	
Die Hard 	118. Die Hard (1988) 	8.2 	
Indiana Jones and the Last Crusade 	119. Indiana Jones and the Last Crusade (1989) 	8.2 	
Incendies 	120. Incendies (2010) 	8.2 	
Bicycle Thieves 	121. Bicycle Thieves (1948) 	8.2 	
1917 	122. 1917 (2019) 	8.2 	
Like Stars on Earth 	123. Like Stars on Earth (2007) 	8.2 	
Downfall 	124. Downfall (2004) 	8.2 	
For a Few Dollars More 	125. For a Few Dollars More (1965) 	8.2 	
Batman Begins 	126. Batman Begins (2005) 	8.2 	
Dangal 	127. Dangal (2016) 	8.2 	
The Kid 	128. The Kid (1921) 	8.2 	
Some Like It Hot 	129. Some Like It Hot (1959) 	8.2 	
The Father 	130. The Father (2020) 	8.2 	
All About Eve 	131. All About Eve (1950) 	8.2 	
Green Book 	132. Green Book (2018) 	8.2 	
The Wolf of Wall Street 	133. The Wolf of Wall Street (2013) 	8.2 	
Judgment at Nuremberg 	134. Judgment at Nuremberg (1961) 	8.2 	
Unforgiven 	135. Unforgiven (1992) 	8.2 	
Pan's Labyrinth 	136. Pan's Labyrinth (2006) 	8.2 	
Casino 	137. Casino (1995) 	8.2 	
Ran 	138. Ran (1985) 	8.2 	
Monty Python and the Holy Grail 	139. Monty Python and the Holy Grail (1975) 	8.2 	
There Will Be Blood 	140. There Will Be Blood (2007) 	8.2 	
A Beautiful Mind 	141. A Beautiful Mind (2001) 	8.2 	
The Sixth Sense 	142. The Sixth Sense (1999) 	8.2 	
The Truman Show 	143. The Truman Show (1998) 	8.1 	
Yojimbo 	144. Yojimbo (1961) 	8.1 	
The Treasure of the Sierra Madre 	145. The Treasure of the Sierra Madre (1948) 	8.1 	
Rashomon 	146. Rashomon (1950) 	8.1 	
The Great Escape 	147. The Great Escape (1963) 	8.1 	
Shutter Island 	148. Shutter Island (2010) 	8.1 	
Kill Bill: Vol. 1 	149. Kill Bill: Vol. 1 (2003) 	8.1 	
Jurassic Park 	150. Jurassic Park (1993) 	8.1 	
No Country for Old Men 	151. No Country for Old Men (2007) 	8.1 	
The Elephant Man 	152. The Elephant Man (1980) 	8.1 	
Finding Nemo 	153. Finding Nemo (2003) 	8.1 	
Raging Bull 	154. Raging Bull (1980) 	8.1 	
Chinatown 	155. Chinatown (1974) 	8.1 	
Gone with the Wind 	156. Gone with the Wind (1939) 	8.1 	
V for Vendetta 	157. V for Vendetta (2005) 	8.1 	
Inside Out 	158. Inside Out (2015) 	8.1 	
Lock, Stock and Two Smoking Barrels 	159. Lock, Stock and Two Smoking Barrels (1998) 	8.1 	
The Thing 	160. The Thing (1982) 	8.1 	
Dial M for Murder 	161. Dial M for Murder (1954) 	8.1 	
The Secret in Their Eyes 	162. The Secret in Their Eyes (2009) 	8.1 	
The Bridge on the River Kwai 	163. The Bridge on the River Kwai (1957) 	8.1 	
Howl's Moving Castle 	164. Howl's Moving Castle (2004) 	8.1 	
Trainspotting 	165. Trainspotting (1996) 	8.1 	
Three Billboards Outside Ebbing, Missouri 	166. Three Billboards Outside Ebbing, Missouri (2017) 	8.1 	
Gran Torino 	167. Gran Torino (2008) 	8.1 	
Warrior 	168. Warrior (2011) 	8.1 	
Fargo 	169. Fargo (1996) 	8.1 	
My Neighbor Totoro 	170. My Neighbor Totoro (1988) 	8.1 	
Prisoners 	171. Prisoners (2013) 	8.1 	
Million Dollar Baby 	172. Million Dollar Baby (2004) 	8.1 	
The Gold Rush 	173. The Gold Rush (1925) 	8.1 	
Blade Runner 	174. Blade Runner (1982) 	8.1 	
On the Waterfront 	175. On the Waterfront (1954) 	8.1 	
Catch Me If You Can 	176. Catch Me If You Can (2002) 	8.1 	
The Third Man 	177. The Third Man (1949) 	8.1 	
Children of Heaven 	178. Children of Heaven (1997) 	8.1 	
Ben-Hur 	179. Ben-Hur (1959) 	8.1 	
The General 	180. The General (1926) 	8.1 	
Wild Strawberries 	181. Wild Strawberries (1957) 	8.1 	
12 Years a Slave 	182. 12 Years a Slave (2013) 	8.1 	
Gone Girl 	183. Gone Girl (2014) 	8.1 	
The Deer Hunter 	184. The Deer Hunter (1978) 	8.1 	
Before Sunrise 	185. Before Sunrise (1995) 	8.1 	
Harry Potter and the Deathly Hallows: Part 2 	186. Harry Potter and the Deathly Hallows: Part 2 (2011) 	8.1 	
In the Name of the Father 	187. In the Name of the Father (1993) 	8.1 	
Mr. Smith Goes to Washington 	188. Mr. Smith Goes to Washington (1939) 	8.1 	
The Grand Budapest Hotel 	189. The Grand Budapest Hotel (2014) 	8.1 	
The Wages of Fear 	190. The Wages of Fear (1953) 	8.1 	
Sherlock Jr. 	191. Sherlock Jr. (1924) 	8.1 	
Room 	192. Room (2015) 	8.1 	
Barry Lyndon 	193. Barry Lyndon (1975) 	8.1 	
Memories of Murder 	194. Memories of Murder (2003) 	8.1 	
The Seventh Seal 	195. The Seventh Seal (1957) 	8.1 	
Hacksaw Ridge 	196. Hacksaw Ridge (2016) 	8.1 	
Klaus 	197. Klaus (2019) 	8.1 	
Wild Tales 	198. Wild Tales (2014) 	8.1 	
The Big Lebowski 	199. The Big Lebowski (1998) 	8.1 	
How to Train Your Dragon 	200. How to Train Your Dragon (2010) 	8.1 	
Mad Max: Fury Road 	201. Mad Max: Fury Road (2015) 	8.1 	
Mary and Max 	202. Mary and Max (2009) 	8.1 	
Pather Panchali 	203. Pather Panchali (1955) 	8.1 	
The Passion of Joan of Arc 	204. The Passion of Joan of Arc (1928) 	8.1 	
Jaws 	205. Jaws (1975) 	8.1 	
Monsters, Inc. 	206. Monsters, Inc. (2001) 	8.1 	
Hotel Rwanda 	207. Hotel Rwanda (2004) 	8.1 	
Tokyo Story 	208. Tokyo Story (1953) 	8.1 	
Dead Poets Society 	209. Dead Poets Society (1989) 	8.1 	
Platoon 	210. Platoon (1986) 	8.0 	
Rocky 	211. Rocky (1976) 	8.0 	
Ford v Ferrari 	212. Ford v Ferrari (2019) 	8.0 	
Stand by Me 	213. Stand by Me (1986) 	8.0 	
The Terminator 	214. The Terminator (1984) 	8.0 	
Rush 	215. Rush (2013) 	8.0 	
Spotlight 	216. Spotlight (2015) 	8.0 	
Into the Wild 	217. Into the Wild (2007) 	8.0 	
Network 	218. Network (1976) 	8.0 	
The Wizard of Oz 	219. The Wizard of Oz (1939) 	8.0 	
Logan 	220. Logan (2017) 	8.0 	
Groundhog Day 	221. Groundhog Day (1993) 	8.0 	
Ratatouille 	222. Ratatouille (2007) 	8.0 	
The Exorcist 	223. The Exorcist (1973) 	8.0 	
Before Sunset 	224. Before Sunset (2004) 	8.0 	
The Best Years of Our Lives 	225. The Best Years of Our Lives (1946) 	8.0 	
The Incredibles 	226. The Incredibles (2004) 	8.0 	
The Battle of Algiers 	227. The Battle of Algiers (1966) 	8.0 	
To Be or Not to Be 	228. To Be or Not to Be (1942) 	8.0 	
Rebecca 	229. Rebecca (1940) 	8.0 	
The Grapes of Wrath 	230. The Grapes of Wrath (1940) 	8.0 	
Cool Hand Luke 	231. Cool Hand Luke (1967) 	8.0 	
Hachi: A Dog's Tale 	232. Hachi: A Dog's Tale (2009) 	8.0 	
Amores perros 	233. Amores perros (2000) 	8.0 	
Dersu Uzala 	234. Dersu Uzala (1975) 	8.0 	
My Father and My Son 	235. My Father and My Son (2005) 	8.0 	
The 400 Blows 	236. The 400 Blows (1959) 	8.0 	
Persona 	237. Persona (1966) 	8.0 	
Life of Brian 	238. Life of Brian (1979) 	8.0 	
La Haine 	239. La Haine (1995) 	8.0 	
Pirates of the Caribbean: The Curse of the Black Pearl 	240. Pirates of the Caribbean: The Curse of the Black Pearl (2003) 	8.0 	
It Happened One Night 	241. It Happened One Night (1934) 	8.0 	
The Sound of Music 	242. The Sound of Music (1965) 	8.0 	
The Handmaiden 	243. The Handmaiden (2016) 	8.0 	
Gandhi 	244. Gandhi (1982) 	8.0 	
Aladdin 	245. Aladdin (1992) 	8.0 	
The Help 	246. The Help (2011) 	8.0 	
Beauty and the Beast 	247. Beauty and the Beast (1991) 	8.0 	
Rififi 	248. Rififi (1955) 	8.0 	
Dances with Wolves 	249. Dances with Wolves (1990) 	8.0 	
Kill Bill: Vol. 2 	250. Kill Bill: Vol. 2 (2004) 	8.0`

var filmList2 = filmList.split("(");

filmList2[0] = "The Shawshank Redemption"

for (i=1; i<filmList2.length; i++){
    var dotCount = 0;
    listSlice(filmList2, dotCount, 2)
    listSlice(filmList2, dotCount, 2)
}

for (i=1; i<filmList2.length; i++){
    filmList2[i] = filmList2[i].slice(2,-1)
}

function listSlice(filmList, dotCount, num) { 
    for(j=0; j<filmList[i].length; j++) {
        if (filmList[i][j] === ".") {
            dotCount++;
            if (dotCount === num) {
                filmList[i] = filmList[i].slice(j);
            }
        }
    }
}

console.log(filmList2);

// var newQueryURL = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`

