<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	
</script>

<svelte:head>
	<title>គ្រូពេទ្យ - ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ | Hospital Management System</title>
	<meta
		name="description"
		content="ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ Krupet ផ្តល់សេវាកម្មគ្រប់គ្រងអ្នកជំងឺ ឱសថស្ថាន មន្ទីរពិសោធន៍ និងសេវាកម្មសុខាភិបាលទាំងអស់។ Hospital Management System for healthcare providers in Cambodia."
	/>
	<meta
		name="keywords"
		content="hospital management system, HMS, Cambodia healthcare, ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យ, ឱសធស្ថាន, មន្ទីរពេទ្យ, សុខាភិបាល, patient registration, pharmacy management, HMS Cambodia, Clinic System, Pharmacy POS, Laboratory Management System"
	/>
	<meta name="author" content="Krupet.com" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://krupet.com/" />
	
</svelte:head>
<Navbar />
<main class="main">
	<!-- Hero Section -->
	<section id="hero" class="hero section light-background">
		<div class="container position-relative">
			<div class="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
				<h2 class="mb-2">សូមស្វាគមន៍មកកាន់ គេហទំព័រ Krupet</h2>
				<p>គេហទំព័រយើងផ្ដល់នូវការលក់ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពេទ្យគ្រប់ប្រភេទ!</p>
			</div>
			<!-- End Welcome -->

			<div class="content row gy-4">
				<div class="col-lg-4 d-flex align-items-stretch">
					<div class="why-box" data-aos="zoom-out" data-aos-delay="200">
						<h3>ហេតុអ្វីជ្រើសរើស Krupet?</h3>
						<p>
							គឺជាប្រព័ន្ធឌីជីថលដែលត្រូវបានរចនាឡើងដើម្បីគ្រប់គ្រងដំណើរការចម្បងៗនៅក្នុងមន្ទីរពេទ្យឬស្ថាប័នសុខាភិបាលផ្សេងៗ។
							ប្រព័ន្ធនេះអនុញ្ញាតឱ្យមានការគ្រប់គ្រងធនធាន, អ្នកជំងឺ,
							ការពិនិត្យវេជ្ជសាស្រ្ត,និងសេវាកម្មផ្សេងៗទាក់ទងនឹងសុខភាពដោយមានប្រសិទ្ធភាពខ្ពស់។
						</p>
						<div class="text-center">
							<a href="#departments" class="more-btn"
								><span>អានបន្ថែម</span> <i class="bi bi-chevron-right"></i></a
							>
						</div>
					</div>
				</div>
				<!-- End Why Box -->

				<div class="col-lg-8 d-flex align-items-stretch">
					<div class="d-flex flex-column justify-content-center">
						<div class="row gy-4">
							<div class="col-xl-4 d-flex align-items-stretch">
								<div class="icon-box" data-aos="zoom-out" data-aos-delay="300">
									<i class="bi bi-clipboard-data"></i>
									<h4>ការចុះឈ្មោះអ្នកជំងឺ (Patient Registration)</h4>
									<p>
										អនុញ្ញាតឱ្យអ្នកធ្វើការចុះឈ្មោះព័ត៌មានអ្នកជំងឺយ៉ាងឆាប់រហ័ស
										ដើម្បីអាចតាមដានស្ថានភាព និងប្រតិបត្តិការទាក់ទងផ្សេងៗ។
									</p>
								</div>
							</div>
							<!-- End Icon Box -->

							<div class="col-xl-4 d-flex align-items-stretch">
								<div class="icon-box" data-aos="zoom-out" data-aos-delay="400">
									<i class="bi bi-file-earmark-medical"></i>
									<h4>គ្រប់គ្រងកំណត់ត្រា (Electronic Medical Records)</h4>
									<p>
										កំណត់ត្រារបស់អ្នកជំងឺនឹងត្រូវបានរក្សាទុកយ៉ាងប្រកបដោយសុវត្ថិភាព
										និងតាមដានបានយ៉ាងងាយស្រួល។
									</p>
								</div>
							</div>
							<!-- End Icon Box -->

							<div class="col-xl-4 d-flex align-items-stretch">
								<div class="icon-box" data-aos="zoom-out" data-aos-delay="500">
									<i class="bi bi-clipboard2-pulse"></i>
									<h4>ការគ្រប់គ្រងឱសថ (Pharmacy Management)</h4>

									<p>
										ការចេញឱសថទៅអ្នកជំងឺ
										និងការគ្រប់គ្រងបញ្ជីឱសថមាននៅក្នុងបណ្ដុំឱសថនិងរងចាំចេញដល់អ្នកជំងឺ។
									</p>
								</div>
							</div>
							<!-- End Icon Box -->
						</div>
					</div>
				</div>
			</div>
			<!-- End  Content-->
		</div>
	</section>
	<!-- /Hero Section -->

	<!-- /About Section -->

	<!-- /Stats Section -->

	<!-- Services Section -->
	<section id="services" class="services section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>សេវាកម្ម</h2>
			<p>ផ្ដល់នូវការគ្រប់គ្រងស្ថាប័នសុខាភិបាលនិងមន្ទីរពេទ្យទៅតាមតម្រូវការរបស់អ្នក។</p>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row gy-4">
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-clipboard-check"></i>
						</div>

						<h3>ស្នើរសុំប្រើរសាកល្បង</h3>

						<p>
							សូមធ្វើការចុះឈ្មោះដើម្បីស្នើរសុំការប្រើរសាកល្បងមុននឹងលោកអ្នកសម្រេចចិត្តប្រើរជាផ្លូវការឫពិភាក្សាយោបល់ជាមុន!
						</p>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-capsule"></i>
						</div>
						<h3>ឱសថស្ថាន</h3>
						<p>---</p>
					</div>
				</div>
				<!-- End Service Item -->

				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-prescription2"></i>
						</div>
						<h3>មន្ទីរពិសោធន៍</h3>
						<p>ចាក់វ៉ាក់សាំង មន្ទីរពិសោធន៍</p>
					</div>
				</div>
				<!-- End Service Item -->
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-heart-pulse"></i>
						</div>
						<h3>បន្ទប់ពិគ្រោះមុនក្រោយសម្រាល/បន្ទប់ថែទាំ</h3>
						<p>ឱសថស្ថាន ចាក់វ៉ាក់សាំង ពិគ្រោះក្រៅ</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-journal-medical"></i>
						</div>
						<h3>បន្ទប់ពិគ្រោះព្យាបាលជំងឺ</h3>
						<p>ឱសថស្ថាន ចាក់វ៉ាក់សាំង មន្ទីរពិសោធន៍ រូបភាពវេជ្ជសាស្ត្រ ពិគ្រោះក្រៅ</p>
					</div>
				</div>

				<!-- End Service Item -->

				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
					<div class="service-item position-relative">
						<div class="icon">
							<i class="bi bi-hospital"></i>
						</div>
						<h3>មន្ទីរសម្រាកព្យាបាលនិងសម្ភព</h3>
						<p>ឱសថស្ថាន ចាក់វ៉ាក់សាំង មន្ទីរពិសោធន៍ រូបភាពវេជ្ជសាស្ត្រ ពិគ្រោះក្រៅ សម្រាកព្យាបាល</p>
					</div>
				</div>
				<!-- End Service Item -->
			</div>
		</div>
	</section>
	<!-- /Services Section -->

	<!-- /Appointment Section -->

	<!-- Departments Section -->
	<section id="departments" class="departments section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>កញ្ចប់សេវាកម្ម</h2>
			<p>ស្វែងយល់បន្ថែមអំពីសេវាកម្មរបស់យើង។</p>
		</div>

		<!-- End Section Title -->

		<div class="container" data-aos="fade-up" data-aos-delay="100">
			<div class="row">
				<div class="col-lg-8 details order-2 order-lg-1">
					<h3 class="">កញ្ចប់សេវាកម្ម-ឱសថស្ថាន (Pharmacy/Drugstore)</h3>
					<p>
						សំរាប់ឱសថស្ថានចាប់ផ្តើមពីខ្នាតតូច មធ្យម ដល់ខ្នាតធំ មានការបញ្ចូលបញ្ជីឱសថឬ មុខទំនិញ ផ្សេងៗ
						តាមប្រភេទក្រុមនិមួយៗ មានបញ្ជីការលក់ទំនិញរាយ ដុំ ឈ្មោះអតិថិជន របាយការណ៍ប្រចាំថ្ងៃ ខែ
						ឆ្នាំ គ្រប់គ្រងការផុតកំណត់ប្រើប្រាស់ របស់ឱសថ ការដាសតឿនស្តុកឱសថឬមុខទំនិញ ។ គ្រប់គ្រង
						បគ្គលិក មិន កំណត់ចំនួនអ្នកប្រើប្រាស់ ជាពិសេសមានកត់ត្រារបាយការណ៍ទិញ-លក់ ត្រឹមត្រូវ
						កត់ត្រាអតិថិជន ជំពាក់ប្រាក់ និង ការទូទាត់ជាក់លាក់ ងាយស្រួលសំរាប់លោក
						លោកស្រីដែលជាម្ចាស់ឱសថស្ថាន ។
					</p>
					<br />
				</div>
				<div class="col-lg-4 text-center order-1 mb-4">
					<img
						src="assets/img/phram.jpg"
						alt="Pharmacy Management System Interface"
						class="img-fluid"
					/>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 text-center order-1 mb-4">
					<img
						src="assets/img/labo.jpg"
						alt="Laboratory Management System Interface"
						class="img-fluid"
					/>
				</div>
				<div class="col-lg-8 details order-2 order-lg-1">
					<h3>កញ្ចប់សេវាកម្ម-មន្ទីរពិសោធន៍ (Laboratory)</h3>
					<p>
						ការគ្រប់គ្រងទិន្និន័យរបាយការណ៍ឈ្មោះអតិថិជន សញ្ញាជីវិត ការស្នើសុំធ្វើតេស្តឈម ឬ
						វត្ថុសំណាកផ្សេងៗ ជាកម្មវិធីគ្រប់គ្រងតាមបែបទំនើរឌីជីថលអាចប្រើប្រាស់ បានគ្រប់ Device
						(Phone,Ipad,Tablet,Computer…) មិនតែប៉ុណ្ណោះវាមានភ្ជាប់នៅ កម្មវិធីចាក់ថ្នាំបង្ការ
						ផ្តល់បង្ហាញ ពីកាលបរិច្ឆេទណាត់ជួបទទួលវ៉ាក់សាំងបង្ការលើកក្រោយ ។ កំណត់ត្រារបាយការណ៍ទាំងអស់
						ប្រវត្តន៍អតិថិជនដែលបានមកទទួលសេវា និង របាយការណ៍ហរិញ្ញវត្ថុ លើការចំណាយ និង ចំណូល
						តារាងប្រាក់ខែបុគ្គលិក និង ចំនួនអ្នកប្រើប្រាស់មិនកំណាត់ អាចបែងចែកនៅតាមតួនាទី និង មុខងារ
						(Admin,accounting,Register,Laboratory,billing) ។
					</p>

					<br />
				</div>
			</div>

			<div class="row">
				<div class="col-lg-8 details order-2 order-lg-1">
					<h3>
						កញ្ចប់សេវាកម្ម-បន្ទប់ពិគ្រោះមុនក្រោយសម្រាល/បន្ទប់ថែទាំ (Prenatal / Postnata Consultation
						Room / Nursing Room )
					</h3>
					<p>
						ជាជំរើសដ៏ល្អសំរាប់លោកគ្រូ អ្នកគ្រូ ដែលជាគិលានុបដ្ឋាក-យិកា ឆ្មប ដែលអាចប្រើប្រាស់បាន
						ស្របទៅតាមកម្មវិធីប្រើប្រាស់ថ្នាក់ជាតិ ដែលអាចកត់ត្រារបាយការណ៍ការរបស់អ្នកជំងឺដែលបានមក
						ទទួលសេវាថែទាំនៅតាមមូលដ្ឋាន មានដូចជា សញ្ញាជីវិត ការពិនិត្យជំងឺដំបូង ការ Assessment
						អ្នកជំងឺ ផែនការបន្តបន្ទាប់ ការធ្វើ រោគវិនិច្ឆ័យ ផែនការណ៍ ការវាយតម្លៃ ជាពិសេសប្រភេទ
						នៃការសេវាកម្ម ទៅតាមតំរូវការ ។ មានរបាយការណ៍កត់ត្រាទាំងអស់របស់អ្នកជំងឺ រោគសញ្ញា
						ប្រវត្តន៍ជំងឺបច្ចុប្បន្ន ប្រវត្តន៍ ប្រើប្រាស់ថ្នាំ ការចាក់វ៉ាក់សាំង ...៕
						ជាពិសេសជាងនេះទៅទៀតនោះគឺបានភ្ជាប់មកនៅកម្មវិធី គិតប្រាក់ តារាងរបាយការណ៍អ្នកជំងឺចេញ-ចូល
						ប្រចាំថ្ងៃ ខែ ឆ្នាំ របាយការណ៍ចំណូល-ចំណាយ ផ្សេងៗ។
					</p>

					<br />
				</div>
				<div class="col-lg-4 text-center order-1 mb-4">
					<img src="assets/img/3.jpg" alt="Nurse and Patient Care Management" class="img-fluid" />
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 text-center order-1 mb-4">
					<img
						src="assets/img/4.jpg"
						alt="Doctor Consultation and Medical Records"
						class="img-fluid"
					/>
				</div>
				<div class="col-lg-8 details order-2">
					<h3>កញ្ចប់សេវាកម្ម-បន្ទប់ពិគ្រោះព្យាបាលជំងឺ (Cabinet Consult Medical Room)</h3>
					<p>
						លោកគ្រូ អ្នកគ្រូមានភាពងាយស្រួលជាមុន ជំនួសពីការសរសេរដោយដៃ អាចបាត់ឯកសារផងនោះ
						កម្មវិធីនេះជួយឲ្យមានប្រសិទ្ធភាពខ្ពស់នៃគុណភាពការងារ ដល់ការ
						តត់ត្រានិងរក្សាទុកគ្រប់ឯកសារដែលពាក់ព័ន្ធនិងអ្នកជំងឺ ជាទម្រង់ SOAP Note
						ងាយស្រួលដល់លោកគ្រូអ្នកគ្រូ ក្នុងការធ្វើការស្នើសុំ
						ការពិនិត្យដើម្បីឲ្យដល់គោលដៅក្នុងការធ្វើរោគវិនិច្ឆ័យ ដូចជា Laboratory,Imaging
						មានការបង្ថែមលើមុខងារ លាបូ និង រូបភាពវេជ្ជសាស្រ្ត មានទម្រង់ Template (Echo general, OB ,
						ENT,ECG ) និង វ៉ាក់សាំង ថែមពីនោះទទៅ វាមានសមត្ថភាព ពាក់កណ្តាលពេញនៃកម្មវិធី HMS
						ដែលតាមដានដល់អ្នកជំងឺជាក់ លាក់បំផុតលើកកត់ត្រានិងរបាយការណ៍ អ្នកជំងឺដែលមកទទួលសេវាកម្ម ។
						លើសពីនេះទៀតអាចបង្កើត អ្នកប្រើប្រាស់ដោយមិនកំណត់ និង ភ្ជាប់មកនៅកម្មវិធី គិតប្រាក់
						តារាងរបាយការណ៍អ្នកជំងឺចេញ-ចូល ប្រចាំថ្ងៃ ខែ ឆ្នាំ របាយការណ៍ចំណូល-ចំណាយ ផ្សេងៗ ចំនួនឱសថ
						ស្តុកឱសថ ដែលបានប្រើប្រាស់ ការដាស់តឿនឱសថប្រើប្រាស់ប្រចាំថ្ងៃ....។
					</p>

					<br />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 details order-2 order-lg-1">
					<h3>កញ្ចប់សេវាកម្ម-មន្ទីរសម្រាកព្យាបាល និងសម្ភព (Clinic / Maternity Hospital)</h3>
					<p>
						ជាកម្មវិធីមន្ទីរពេទ្យពេញលេញ Full HMS សម្រាប់ប្រើប្រាស់ខ្នាត់ធំដូចជា
						មន្ទីរពេទ្យថ្នាក់ជាតិ ថ្នាក់ក្រោមជាតិ មន្ទីរពេទ្យបង្អែកខេត្ត មន្ទីរពេទ្យបង្អែកស្រុក
						មន្ទីរសម្រាកព្យាបាល-សម្ភព គ្លីនិក ។ ការចុះឈ្មោះអ្នកជំងឺ ពេលចូលដំបូងកត់ត្រាប្រចាំថ្ងៃ
						ចំនួនក្នុងការមកទទួលសេវា ប្រវត្តន៍ជំងឺទាំងអស់ របស់អ្នកជំងឺ និមួយៗ របាយការណ៍សង្កេតជំងឺទាំង
						OPD (ពិគ្រោះជំងឺក្រៅ) ការព្យាបាលប្រចាំថ្ងៃ Progress note សំរាប់ IPD
						(ទម្រង់ជំងឺសម្រាកពេទ្យ) និងការតាមដានរបស់លោកគ្រូអ្នកគ្រូ(វេជ្ជបណ្ឌិត)ការវាយតម្លៃ
						Physical-Exam , Investigation, Management ជាប្រចាំថ្ងៃ និង
						លោកគ្រូអ្នកគ្រូ(បុគ្គលិកពេទ្យ) ប្រចាំការ ការកត់ត្រាជាក់លាក់ ការវាយតម្លៃ (Nursing
						Process) ។ កម្មវីធីសម្រាបការវះកាត់ និង សេវាកម្ម ផ្សេង ៗ ប្រភេទនៃការបង់ប្រាក់ (បង់ពេញថ្លៃ
						លើកលែង បសស មូលនិធិសមធម៌...)។ ជាពិសេសរបាយការណ៍អ្នកជំងឺទៅផ្នែកនិមួយៗ និង
						ការផ្តេរអ្នកជំងឺពីរផ្នែកមួយទៅផ្នែកមួយមានភាពងាយស្រួល មាននៅក្នុងប្រព័ន្ធស្រាប់
						គ្រាន់តែឆែកតាមរយះ ID Patient or ID Visit ។
						<br />
						គ្រប់ផ្នែកទាំងអស់នៃមន្ទីរពេទ្យមិនលាយលំចូលគ្នា ងាយស្រួលគ្រូពេទ្យធ្វើការងារទៅតាមផ្នែករាងៗខ្លួន
						។ ប្រតិបត្តការណ៍របស់កម្មវិធីមានដូចជា ៖ ផ្ទាំងគ្រប់គ្រង , ការលក់ទំនិញ , របាយការណ៍ , សោរពើភ័ណ្ឌ
						, ចុះឈ្មោះអ្នកជំងឺ
					</p>

					<br />
				</div>
				<div class="col-lg-4 text-center order-1 order-lg-2">
					<img
						src="assets/img/departments-4.jpg"
						alt="Maternity and Clinic Management"
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
	</section>
	<!-- /Departments Section -->

	<!-- Doctors Section -->
	<section id="doctors" class="doctors section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>អ្នកបង្កើត</h2>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row gy-4">
				<!-- End Team Member -->

				<div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
					<div class="team-member d-flex align-items-start">
						<div class="pic">
							<img
								src="assets/img/doctors/heng.png"
								class="img-fluid"
								alt="Korn Seheng - Project Workflow"
							/>
						</div>
						<div class="member-info">
							<h4>កន សែហេង</h4>
							<span>Project Workflow </span>
							<div class="social">
								<a aria-label="facebook" target="_blank" href="https://www.facebook.com/korn.seheng"
									><i class="bi bi-facebook"></i></a
								>

								<a aria-label="facebook-1" target="_blank" href="https://t.me/kornseheng"><i class="bi bi-telegram"></i></a>

								<a aria-label="hphone" href="tel:0969944681"> <i class="bi bi-phone"></i> </a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
					<div class="team-member d-flex align-items-start">
						<div class="pic">
							<img
								src="assets/img/doctors/nean.jpeg"
								class="img-fluid"
								alt="An Channean - FullStack Developer"
							/>
						</div>
						<div class="member-info">
							<h4>អាន ចាន់នាន</h4>
							<span>FullStack Developer</span>
							<div class="social">
								<a aria-label="facebook" target="_blank" href="https://www.facebook.com/an.channean"
									><i class="bi bi-facebook"></i></a
								>

								<a aria-label="facebook-1" target="_blank" href="https://t.me/an_channean"><i class="bi bi-telegram"></i></a
								>

								<a aria-label="hphone" href="tel:066552444"> <i class="bi bi-phone"></i> </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Doctors Section -->

	<!-- Faq Section -->
	<section id="faq" class="faq section light-background">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>សំនួរ-ចម្លើយដែលត្រូវបានគេសួរជាទូទៅ</h2>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
					<div class="faq-container">
						<div class="faq-item faq-active">
							<h3>តើដំណាក់កាលដំបូងបំផុត និងសំខាន់បំផុតក្នុងការចាប់ផ្តើមគម្រោងបង្កើត HMS គឺអ្វី?</h3>
							<div class="faq-content">
								<p>
									ការពន្យល់៖ ត្រូវសិក្សាឲ្យបានស៊ីជម្រៅអំពីដំណើរការការងារ (Workflow)
									បច្ចុប្បន្នរបស់មន្ទីរពេទ្យ (ចាប់ពីការចុះឈ្មោះអ្នកជំងឺ រហូតដល់ការចេញវិក្កយបត្រ)
									ដើម្បីកំណត់ឲ្យបានច្បាស់លាស់ថាតើប្រព័ន្ធថ្មីត្រូវការលក្ខណៈពិសេស (Features) អ្វីខ្លះ
									ហើយផ្នែកណាខ្លះដែលត្រូវបញ្ចូលក្នុងប្រព័ន្ធ (ឧ. គណនេយ្យ ឱសថស្ថាន បន្ទប់ពិសោធន៍)។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->

						<div class="faq-item">
							<h3>
								តើម៉ូឌុល (Module) សំខាន់ៗបំផុតចំនួនបី (៣) ដែល HMS
								ត្រូវមានដើម្បីដំណើរការជាមូលដ្ឋានមានអ្វីខ្លះ?
							</h3>
							<div class="faq-content">
								<p>
									ម៉ូឌុលចុះឈ្មោះអ្នកជំងឺ (Patient Registration/Admission): សម្រាប់គ្រប់គ្រងកំណត់ត្រា
									(EMR/EHR) និងព័ត៌មានអត្តសញ្ញាណអ្នកជំងឺ។ ម៉ូឌុលណាត់ជួប និងពិគ្រោះ (Appointment &
									Consultation): សម្រាប់រៀបចំកាលវិភាគណាត់ជួប
									និងគ្រប់គ្រងកំណត់ត្រាពិគ្រោះរបស់គ្រូពេទ្យ។ ម៉ូឌុលគ្រប់គ្រងវិក្កយបត្រ
									និងហិរញ្ញវត្ថុ (Billing & Finance): សម្រាប់គណនាថ្លៃសេវា គ្រប់គ្រងការទូទាត់
									និងចេញវិក្កយបត្រ។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->

						<div class="faq-item">
							<h3>
								តើបញ្ហាប្រឈមធំបំផុតមួយក្នុងការអនុវត្ត HMS
								ទៅក្នុងមន្ទីរពេទ្យដែលធ្លាប់ប្រើប្រព័ន្ធក្រដាសមានអ្វីខ្លះ?
							</h3>
							<div class="faq-content">
								<p>
									ការពន្យល់៖ បុគ្គលិកសុខាភិបាលជាច្រើន (ជាពិសេសអ្នកចាស់ៗ) ធ្លាប់ប្រើទម្លាប់ចាស់
									(ក្រដាស) ហើយពិបាកនឹងផ្លាស់ប្តូរទៅប្រើប្រាស់បច្ចេកវិទ្យាថ្មី។
									ការបណ្តុះបណ្តាលបុគ្គលិកឲ្យមានជំនាញប្រើប្រាស់ប្រព័ន្ធថ្មីប្រកបដោយប្រសិទ្ធភាពទាមទារពេលវេលា
									ការអត់ធ្មត់ និងធនធានច្រើន។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->

						<div class="faq-item">
							<h3>
								តើកត្តាសំខាន់បំផុតអ្វីខ្លះដែលត្រូវយកចិត្តទុកដាក់ដើម្បីធានា សុវត្ថិភាពទិន្នន័យ (Data
								Security) នៅក្នុង HMS?
							</h3>
							<div class="faq-content">
								<p>
									ការពន្យល់៖ ត្រូវអនុវត្តនូវវិធានការសុវត្ថិភាពដូចជា ការអ៊ិនគ្រីប (Encryption)
									ទិន្នន័យ ការគ្រប់គ្រងសិទ្ធិចូលប្រើប្រាស់ (Access Controls) តាមតួនាទី (Role-based
									access) និងការបម្រុងទុកទិន្នន័យ (Data Backups) ជាប្រចាំ ដើម្បីការពារកុំឲ្យបាត់បង់
									ឬធ្លាយព័ត៌មានសុខភាពរបស់អ្នកជំងឺ។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->

						<div class="faq-item">
							<h3>តើអ្វីជាគុណសម្បត្តិចម្បងបំផុតដែលមន្ទីរពេទ្យទទួលបានពីការអនុវត្ត HMS នេះ?</h3>
							<div class="faq-content">
								<p>
									ការពន្យល់៖ HMS កាត់បន្ថយការងារឯកសារ (Paperwork) កាត់បន្ថយពេលវេលារង់ចាំ (Waiting
									Time) ធ្វើឲ្យការទំនាក់ទំនងរវាងផ្នែកនានាក្នុងមន្ទីរពេទ្យកាន់តែរលូន
									ព្រមទាំងផ្តល់ទិន្នន័យត្រឹមត្រូវ និងទាន់ពេលវេលាដល់គ្រូពេទ្យក្នុងការសម្រេចចិត្ត
									ដែលនាំឲ្យមានការព្យាបាលប្រសើរជាងមុន។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->

						<div class="faq-item">
							<h3>ក្រៅពីម៉ូឌុលមូលដ្ឋាន តើម៉ូឌុលឯកទេសបន្ថែមអ្វីខ្លះដែលអាចបង្កើនតម្លៃដល់ HMS?</h3>
							<div class="faq-content">
								<p>
									ម៉ូឌុលគ្រប់គ្រងឱសថស្ថាន (Pharmacy Management): គ្រប់គ្រងស្តុកថ្នាំ ចេញវេជ្ជបញ្ជា
									និងការចែកចាយ។ ម៉ូឌុលគ្រប់គ្រងរូបភាពវេជ្ជសាស្រ្ត (PACS/RIS Integration):
									គ្រប់គ្រងរូបភាព X-ray ឬ MRI។ ប្រព័ន្ធគាំទ្រការសម្រេចចិត្តតាមគ្លីនិក (Clinical
									Decision Support Systems - CDSS): ផ្តល់ការដាស់តឿនដល់គ្រូពេទ្យអំពីកម្រិតថ្នាំ
									ឬអាឡែស៊ី។
								</p>
							</div>
							<i class="faq-toggle bi bi-chevron-right"></i>
						</div>
						<!-- End Faq item-->
					</div>
				</div>
				<!-- End Faq Column-->
			</div>
		</div>
	</section>
	<!-- /Faq Section -->

	<!-- Report Samples Section -->
	<section id="report" class="reports section">
		<!-- Section Title -->
		<div class="container section-title" data-aos="fade-up">
			<h2>គំរូរបាយការណ៍</h2>
			<p>ប្រព័ន្ធបង្កើតទម្រង់ឯកសារបានដោយស្វ័យប្រវត្តិ — ដែលបោះពុម្ព ឬ PDF បានភ្លាម</p>
		</div>
		<!-- End Section Title -->

		<div class="container">
			<div class="row gy-4 justify-content-center">
				<!-- Report Card 3 -->
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/labo-report.png"
								alt="Laboratory Report"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/labo-report.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Laboratory Report"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>របាយការណ៍ Lab</h5>
							<p>គំរូរបាយការណ៍ មន្ទីរពិសោធន៍</p>
						</div>
					</div>
				</div>
				<!-- Report Card 3 -->
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/img-report-1.png"
								alt="Laboratory Report"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/img-report-1.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Laboratory Report"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>របាយការណ៍ IMG</h5>
							<p>គំរូរបាយការណ៍ រូបភាពវេជ្ជសាស្រ្ត</p>
						</div>
					</div>
				</div>
				
				<!-- Report Card 4 -->
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/mor-report.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/mor-report.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>វេជ្ជបញ្ជា / SOAP Note</h5>
							<p>គំរូទម្រង់ SOAP Note </p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/sugery-report.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/sugery-report.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>ការវៈកាត់</h5>
							<p>Surgery Report</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/send-patient.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/send-patient.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>លិខិតបញ្ជួនអ្នកជំងឺ</h5>
							<p>Patient transwer</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/accept-leaving-report.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/accept-leaving-report.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>លិខិតអនុញ្ញាតចេញពីពេទ្យ</h5>
							<p>Accept Leaving</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/health-check.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/health-check.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>លិទ្ធិផល់ពិនិត្យសុខភាព</h5>
							<p>Health Checking Result</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/aggrement-birth.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/aggrement-birth.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>លិខិតទទួលស្គាល់កំណើត</h5>
							<p>Birth aggrement</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/leket-somral.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/leket-somral.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>លិខិតបញ្ជាក់ពីការសម្រាលកូន</h5>
							<p>Birth verification</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="250">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/promission-service.png"
								alt="Prescription / Doctor Note"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/promission-service.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Prescription / SOAP Note"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>កិច្ចសន្យាទទួលសេវ៉ា</h5>
							<p>...</p>
						</div>
					</div>
				</div>

				<!-- Report Card 8 -->
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="450">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="assets/img/report-sample/vancine-report.png"
								alt="Vaccination Card"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<a
									href="assets/img/report-sample/vancine-report.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Vaccination Card"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>កាតចាក់វ៉ាក់សាំង</h5>
							<p>គំរូទម្រង់ Vaccination Card / Record</p>
						</div>
					</div>
				</div>
				<!-- Report Card 1 -->
				<div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
					<div class="report-card">
						<div class="report-preview">
							<img
								src="/assets/img/report-sample/invoice.png"
								alt="Invoice / Sales Receipt"
								class="img-fluid"
							/>
							<div class="report-overlay">
								<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
								<a
									href="/assets/img/report-sample/invoice.png"
									class="glightbox"
									data-gallery="reports-gallery"
									aria-label="View Invoice Report"
								>
									<i class="bi bi-zoom-in"></i>
								</a>
							</div>
						</div>
						<div class="report-info">
							<h5>វិក្កយបត្រ / Sale Receipt</h5>
							<p>គំរូវិក្កយបត្រលក់ស្ដង់ដារ A4</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Report Samples Section -->
</main>

<Footer />
