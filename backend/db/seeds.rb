# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data ..."

# USERS
puts "Users"
user1 = User.find_or_create_by!(name: "Angelo", email: "angelo@example.com", password: "password")
user2 = User.find_or_create_by!(name: "Mike", email: "mike@example.com", password: "password")
user3 = User.find_or_create_by!(name: "Rod", email: "rod@example.com", password: "password")


# BOOKS
puts "Books"
book1 = Book.find_or_create_by!(title: "Brave New World", author: "Aldous Huxley", subject: "Dystopian", open_library_cover_key: "OL6504102M", open_library_key: "/works/OL64468W")
book2 = Book.find_or_create_by!(title: "The Count of Monte Cristo", author: "Alexandre Dumas", subject: "Adventure", open_library_cover_key: "OL27388816M", open_library_key: "/works/OL20201553W")
book3 = Book.find_or_create_by!(title: "Dracula", author: "Bram Stoker", subject: "Horror", open_library_cover_key: "OL35373336M", open_library_key: "/works/OL85892W")
book4 = Book.find_or_create_by!(title: "The Chronicles of Narnia", author: "C.S. Lewis", subject: "Fantasy", open_library_cover_key: "OL3962556M", open_library_key: "/works/OL70988W")
book5 = Book.find_or_create_by!(title: "A Tale of Two Cities", author: "Charles Dickens", subject: "Historical Fiction", open_library_cover_key: "OL10137428M", open_library_key: "/works/OL14869647W")
book6 = Book.find_or_create_by!(title: "Great Expectations", author: "Charles Dickens", subject: "Fiction", open_library_cover_key: "OL45791004M", open_library_key: "/works/OL8721462W")
book7 = Book.find_or_create_by!(title: "Jane Eyre", author: "Charlotte Bronte", subject: "Romance", open_library_cover_key: "OL7513511M", open_library_key: "/works/OL5736965W")
book8 = Book.find_or_create_by!(title: "Wuthering Heights", author: "Emily Bronte", subject: "Romance", open_library_cover_key: "OL38586477M", open_library_key: "/works/OL21177W")
book9 = Book.find_or_create_by!(title: "The Old Man and the Sea", author: "Ernest Hemingway", subject: "Fiction", open_library_cover_key: "OL7893352M", open_library_key: "/works/OL63073W")
book10 = Book.find_or_create_by!(title: "The Great Gatsby", author: "F. Scott Fitzgerald", subject: "Fiction", open_library_cover_key: "OL22570129M", open_library_key: "/works/OL468431W")
book11 = Book.find_or_create_by!(title: "Crime and Punishment", author: "Fyodor Dostoevsky", subject: "Fiction", open_library_cover_key: "OL32588103M", open_library_key: "/works/OL24574391W")
book12 = Book.find_or_create_by!(title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", subject: "Fiction", open_library_cover_key: "OL32629839M", open_library_key: "/works/OL24600223W")
book13 = Book.find_or_create_by!(title: "1984", author: "George Orwell", subject: "Dystopian", open_library_cover_key: "OL40228844M", open_library_key: "/works/OL28947878W")
book14 = Book.find_or_create_by!(title: "Animal Farm", author: "George Orwell", subject: "Satire", open_library_cover_key: "OL23269355M", open_library_key: "/works/OL1168007W")
book15 = Book.find_or_create_by!(title: "To Kill a Mockingbird", author: "Harper Lee", subject: "Fiction", open_library_cover_key: "OL37027359M", open_library_key: "/works/OL3140822W")
book16 = Book.find_or_create_by!(title: "Moby Dick", author: "Herman Melville", subject: "Adventure", open_library_cover_key: "OL31857229M", open_library_key: "/works/OL102749W")
book17 = Book.find_or_create_by!(title: "The Odyssey", author: "Homer", subject: "Epic", open_library_cover_key: "OL26401674M", open_library_key: "/works/OL17812254W")
book18 = Book.find_or_create_by!(title: "The Catcher in the Rye", author: "J.D. Salinger", subject: "Fiction", open_library_cover_key: "OL6089177M", open_library_key: "/works/OL3335245W")
book19 = Book.find_or_create_by!(title: "The Hobbit", author: "J.R.R. Tolkien", subject: "Fantasy", open_library_cover_key: "OL51711263M", open_library_key: "/works/OL27482W")
book20 = Book.find_or_create_by!(title: "The Lord of the Rings", author: "J.R.R. Tolkien", subject: "Fantasy", open_library_cover_key: "OL51694024M", open_library_key: "/works/OL27448W")
book21 = Book.find_or_create_by!(title: "Pride and Prejudice", author: "Jane Austen", subject: "Romance", open_library_cover_key: "OL47044678M", open_library_key: "/works/OL66554W")
book22 = Book.find_or_create_by!(title: "The Grapes of Wrath", author: "John Steinbeck", subject: "Fiction", open_library_cover_key: "OL37811454M", open_library_key: "/works/OL23205W")
book23 = Book.find_or_create_by!(title: "The Wizard of Oz ", author: "L. Frank Baum", subject: "Fantasy", open_library_cover_key: "OL8155451M", open_library_key: "/works/OL18417W")
book24 = Book.find_or_create_by!(title: "Little Women", author: "Louisa May Alcott", subject: "Fiction", open_library_cover_key: "OL27300715M", open_library_key: "/works/OL29983W")
book25 = Book.find_or_create_by!(title: "20,000 Leagues Under the Sea", author: "Jules Verne", subject: "Science Fiction", open_library_cover_key: "OL25879477M", open_library_key: "/works/OL17306195W")
book26 = Book.find_or_create_by!(title: "Frankenstein", author: "Mary Shelley", subject: "Horror", open_library_cover_key: "OL35649409M", open_library_key: "/works/OL450063W")
book27 = Book.find_or_create_by!(title: "The Scarlet Letter", author: "Nathaniel Hawthorne", subject: "Fiction", open_library_cover_key: "OL7173915M", open_library_key: "/works/OL455305W")
book28 = Book.find_or_create_by!(title: "Alice's Adventures in Wonderland ", author: "Lewis Carroll", subject: "Fantasy", open_library_cover_key: "OL31754751M", open_library_key: "/works/OL138052W")
book29 = Book.find_or_create_by!(title: "The Alchemist", author: "Paulo Coelho", subject: "Fiction", open_library_cover_key: "OL9245094M", open_library_key: "/works/OL796465W")
book30 = Book.find_or_create_by!(title: "Fahrenheit 451", author: "Ray Bradbury", subject: "Dystopian", open_library_cover_key: "OL40236195M", open_library_key: "/works/OL103123W")


# BOOK BOXES
puts "Book Boxes"
book_box_1 = BookBox.find_or_create_by!(name: "Empress Hotel", address: "721 Government St", latitude: 48.42205963102805, longitude: -123.36793550445304)
book_box_2 = BookBox.find_or_create_by!(name: "Beacon Hill Park", address: "Dallas Road", latitude: 48.409446622640814, longitude: -123.36043792863524)
book_box_3 = BookBox.find_or_create_by!(name: "Topax Park", address: "Finlayson St & Yew St", latitude: 48.44529670499731, longitude: -123.36444316714491)


# COLLECTIONS
puts "Collections"
Collection.find_or_create_by!(book: book1, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book2, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book3, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book4, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book5, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book6, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book7, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book8, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book9, book_box: book_box_1, quantity: 1)
Collection.find_or_create_by!(book: book10, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book11, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book12, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book13, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book14, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book15, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book16, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book17, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book18, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book19, book_box: book_box_2, quantity: 2)
Collection.find_or_create_by!(book: book20, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book21, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book22, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book23, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book24, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book25, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book26, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book27, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book28, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book29, book_box: book_box_3, quantity: 3)
Collection.find_or_create_by!(book: book30, book_box: book_box_3, quantity: 3)


# WISHLISTS
puts "Wishlists"
Wishlist.find_or_create_by!(user: user1, book: book1)
Wishlist.find_or_create_by!(user: user1, book: book2)

Wishlist.find_or_create_by!(user: user2, book: book1)
Wishlist.find_or_create_by!(user: user2, book: book2)

Wishlist.find_or_create_by!(user: user3, book: book1)
Wishlist.find_or_create_by!(user: user3, book: book2)
Wishlist.find_or_create_by!(user: user3, book: book3)
Wishlist.find_or_create_by!(user: user3, book: book4)
Wishlist.find_or_create_by!(user: user3, book: book5)
Wishlist.find_or_create_by!(user: user3, book: book6)


puts "DONE!"
